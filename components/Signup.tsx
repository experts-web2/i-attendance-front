import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  Container,
  Header,
  Content,
  Button,
  Form,
  Item,
  Label,
  Input,
  Text,
  Title,
  Thumbnail,
  Icon,
} from "native-base";
import { User } from "../models/user.model";
import { City } from "../models/city.model";
import { ScrollView, ActivityIndicator ,View } from "react-native";
import { MainStyle } from "../styles";
import { signup, getCities, getCentersByCity } from "../services/user.service";
const Signup = (props: any) => {
  const [user, setUser] = useState(new User());
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cities, setCities] = useState<City[]>([]);
  const [centers, setCenters] = useState<City[]>([]);
  const [error, setError] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCities()
      .then((response: any) => {
        setCities(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCityChange = (itemValue: any) => {
    console.log("itemValue", itemValue);
    setEnabled(true);
    setUser({ ...user, city: itemValue as string, center: "" });

    getCentersByCity(itemValue).then((response: any) => {
      console.log("response", response);
      setCenters(response.data);
    });
  };

  const handleSignup = async (props: any) => {
    setIsLoading(true);
    if (!User.isUserValid(user) || !confirmPassword) {
      setError(true);
    } else {
      
      signup(user)
        .then((response) => {
         
          props.navigation.navigate("Login");
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
        });
    }
  };

  return (
    <Container style={MainStyle.container}>
      <ScrollView>
        <Content contentContainerStyle={MainStyle.contentContainerStyle}>
          <Title style={MainStyle.headerTitle}>Signup</Title>

          <Thumbnail
            style={MainStyle.logo}
            size={100}
            source={{
              uri: "https://logodix.com/logo/1829059.png",
            }}
          />
          <Form>
            <Item
              error={error && !user.name}
              style={MainStyle.formItem}
              stackedLabel
              last
            >
              <Label>Name</Label>
              <Input
                defaultValue={user.name}
                onChangeText={(value) => setUser({ ...user, name: value })}
              />
            </Item>
            {error && !user.name && (
              <Text style={MainStyle.errorMessage}>Name is required</Text>
            )}

            <Item
              error={error && !user.email}
              style={MainStyle.formItem}
              stackedLabel
              last
            >
              <Label>Email</Label>
              <Input
                defaultValue={user.email}
                onChangeText={(value) => setUser({ ...user, email: value })}
              />
            </Item>
            {error && !user.email && (
              <Text style={MainStyle.errorMessage}>Email is required</Text>
            )}
            <Item
              error={error && !user.phone}
              style={MainStyle.formItem}
              stackedLabel
              last
            >
              <Label>Phone Number</Label>
              <Input
                keyboardType="numeric"
                defaultValue={user.phone}
                onChangeText={(value) => setUser({ ...user, phone: value })}
              />
            </Item>
            {error && !user.phone && (
              <Text style={MainStyle.errorMessage}>
                Phone number is required
              </Text>
            )}
            <Item error={error && !user.city} stackedLabel last>
              <Label>City</Label>
              <Item style={MainStyle.row}>
                <Picker
                  mode={"dropdown"}
                  style={MainStyle.formDropdown}
                  selectedValue={user.city}
                  onValueChange={(itemValue, event: any) => {
                    handleCityChange(itemValue);
                  }}
                >
                  {cities.map((c, i) => {
                    return <Picker.Item label={c.name} value={c._id} key={i} />;
                  })}
                </Picker>
              </Item>
            </Item>
            {error && !user.city && (
              <Text style={MainStyle.errorMessage}>City is required</Text>
            )}
            <Item error={error && !user.center} stackedLabel last>
              <Label>Center</Label>
              {
                <Item style={MainStyle.row}>
                  <Picker
                    style={MainStyle.formDropdown}
                    selectedValue={user.center}
                    onValueChange={(itemValue, itemIndex) =>
                      setUser({ ...user, center: itemValue as string })
                    }
                    enabled={enabled}
                  >
                    {centers.map((c, i) => {
                      return (
                        <Picker.Item label={c.name} value={c._id} key={i} />
                      );
                    })}
                  </Picker>
                </Item>
              }
            </Item>
            {error && !user.center && (
              <Text style={MainStyle.errorMessage}>Center is required</Text>
            )}
            <Item
              error={error && !user.password}
              style={MainStyle.formItem}
              stackedLabel
              last
            >
              <Label>Password</Label>
              <Input
                secureTextEntry
                defaultValue={user.password}
                onChangeText={(value) => setUser({ ...user, password: value })}
              />
            </Item>
            {error && !user.password && (
              <Text style={MainStyle.errorMessage}>Password is required</Text>
            )}
            <Item
              error={error && !confirmPassword}
              style={MainStyle.formItem}
              stackedLabel
              last
            >
              <Label>Confirm Password</Label>
              <Input
                secureTextEntry
                defaultValue={confirmPassword}
                onChangeText={(value) => setConfirmPassword(value)}
              />
            </Item>
            {error && !confirmPassword && (
              <Text style={MainStyle.errorMessage}>
                Confirm password is required
              </Text>
            )}

            {confirmPassword.length > 0 &&
              user.password !== confirmPassword && (
                <Text style={MainStyle.errorMessage}>Password Not Matched</Text>
              )}
            {isLoading ? (
             <ActivityIndicator size="large" color="#0000ff" /> 
            ) : (
              <Button
                style={MainStyle.formBtn}
                primary
                onPress={() => handleSignup(props)}
              >
                <Text style={MainStyle.fromBtnText}> Signup </Text>
              </Button>
            )}
         
   
 
          </Form>
        </Content>
      </ScrollView>
    </Container>
  );
};
export default Signup;
