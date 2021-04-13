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
import { ScrollView } from "react-native";
import { MainStyle } from "../styles";
import {createUser} from "../services/user.service"
const Signup = () => {
  const [user, setUser] = useState(new User());
  const [confirmPassword, setConfirmPassword] = useState("");

  // const [disable, setDisable] = useState(true);
  const handleSignup = async () => {
    handlePostUser()
  };
 const handlePostUser = () =>{
 
  createUser({
    "name": "A",
    "email": "test@test.com",
    "password": "test",
    "phone": "5",
    "city": "507f1f77bcf86cd799439011",
    "center": "507f1f77bcf86cd799439011"
  }).then((response)=> console.log(response)).catch((err)=> console.log("ERR",err))

 }
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
            <Item style={MainStyle.formItem} stackedLabel last>
              <Label>Name</Label>
              <Input
                defaultValue={user.name}
                onChangeText={(value) => setUser({ ...user, name: value })}
              />
            </Item>
            <Item style={MainStyle.formItem} stackedLabel last>
              <Label>Email</Label>
              <Input
                defaultValue={user.email}
                onChangeText={(value) => setUser({ ...user, email: value })}
              />
            </Item>
            <Item style={MainStyle.formItem} stackedLabel last>
              <Label>Phone Number</Label>
              <Input
                keyboardType="numeric"
                defaultValue={user.phoneNumber}
                onChangeText={(value) =>
                  setUser({ ...user, phoneNumber: value })
                }
              />
            </Item>

            <Item stackedLabel last>
              <Label>City</Label>

              <Picker
                style={{ flex: 1, width: 200, height: 40 }}
                selectedValue={user.city}
                onValueChange={(itemValue, itemIndex) =>
                  setUser({ ...user, city: itemValue, center: "" })
                }
              > 
               <Picker.Item enabled={false} label="Choose" value="choose" />
                <Picker.Item label="Multan" value="multan" />
                <Picker.Item label="Lahore" value="lahore" />
              </Picker>
            </Item>

            <Item stackedLabel last>
              <Label>Center</Label>
              <Picker
                style={{ width: 200, height: 40 }}
                selectedValue={user.center}
                onValueChange={(itemValue, itemIndex) =>
                  setUser({ ...user, center: itemValue })
                }

              >
                <Picker.Item enabled={false} label="Choose" value="choose" />
                <Picker.Item label={"381 A Block"} value={"block"} />
                <Picker.Item label={"Gulgasht"} value={"gulgasht"} />
                <Picker.Item label={"Double Phatak"} value={"doublePhatak"} />
                <Picker.Item label={"Johar Town"} value={"johartown"} />
                <Picker.Item label={"Bahria Town"} value={"bahriaTown"} />
              </Picker>
            </Item>

            <Item style={MainStyle.formItem} stackedLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry
                defaultValue={user.password}
                onChangeText={(value) => setUser({ ...user, password: value })}
              />
            </Item>
            <Item style={MainStyle.formItem} stackedLabel last>
              <Label>Confirm Password</Label>
              <Input
                secureTextEntry
                defaultValue={confirmPassword}
                onChangeText={(value) => setConfirmPassword(value)}
              />
            </Item>
            {user.password === confirmPassword ? (
              <Text>Password Matched</Text>
            ) : (
              <Text>Password Not Matched</Text>
            )}
            <Button style={MainStyle.formBtn} primary onPress={() => handleSignup()}>
              <Text
                style={MainStyle.fromBtnText}
                
              >
                {" "}
                Signup{" "}
              </Text>
            </Button>
          </Form>
        </Content>
      </ScrollView>
    </Container>
  );
};
export default Signup;
