import React, { useState, useEffect } from "react";
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
} from "native-base";
import { MainStyle } from "../styles";
import { IUserLogin } from "../models";
import {login} from "../services/user.service"
const Login = () => {
  const [user, setUser] = useState<IUserLogin>({ email: "", password: "" });
  const [error , setError] =useState(false)

  const handleLogin = () => {

    if(!user.email || !user.password ){
      setError(true)
    }
    login(user).then((response) => console.log(response)).catch((err)=> console.log(err))
    
  };
  return (
    <Container style={MainStyle.container}>
      <Content contentContainerStyle={MainStyle.contentContainerStyle}>
        <Title style={MainStyle.headerTitle}>Login</Title>

        <Thumbnail
          style={MainStyle.logo}
          size={100}
          source={{
            uri: "https://logodix.com/logo/1829059.png",
          }}
        />
        <Form>
          <Item error={error && !user.email} style={MainStyle.formItem}  stackedLabel last>
            <Label>Email</Label>
            <Input
              defaultValue={user.email}
              onChangeText={(value) => setUser({ ...user, email: value })}
            />
          </Item>
          {error && !user.email && <Text style={MainStyle.errorMessage}>Email is required</Text>}


          <Item error={error && !user.password} style={MainStyle.formItem}  stackedLabel last>
            <Label>Password</Label>
            <Input
              defaultValue={user.password}
              secureTextEntry
              onChangeText={(value) => setUser({ ...user, password: value })}
            />
          </Item>
          {error && !user.password && <Text style={MainStyle.errorMessage}>Password is required</Text>}
          <Button style={MainStyle.formBtn} onPress={() => handleLogin()} primary>
            <Text style={MainStyle.fromBtnText} >

              Login
            </Text>
          </Button>

          {/* <Text style={LoginStyle.fromBtnText}></Text> */}
          <Button transparent>
            <Text>Forgot Password</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
