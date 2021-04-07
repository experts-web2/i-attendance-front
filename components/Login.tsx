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
import { LoginStyle } from "../styles";
import { IUserLogin } from "../models";

const Login = () => {
  const [user, setUser] = useState<IUserLogin>({ email: "", password: "" });

  const handleLogin = () => {
    console.log("user", user);
  };
  return (
    <Container style={LoginStyle.container}>
      <Content contentContainerStyle={LoginStyle.contentContainerStyle}>
        <Title style={LoginStyle.headerTitle}>Login</Title>

        <Thumbnail
          style={LoginStyle.logo}
          size={100}
          source={{
            uri: "https://logodix.com/logo/1829059.png",
          }}
        />
        <Form>
          <Item style={LoginStyle.formItem} stackedLabel last>
            <Label>Email</Label>
            <Input
              defaultValue={user.email}
              onChangeText={(value) => setUser({ ...user, email: value })}
            />
          </Item>
          <Item style={LoginStyle.formItem} stackedLabel last>
            <Label>Password</Label>
            <Input
              defaultValue={user.password}
              secureTextEntry
              onChangeText={(value) => setUser({ ...user, password: value })}
            />
          </Item>
          <Button style={LoginStyle.formBtn} primary>
            <Text style={LoginStyle.fromBtnText} onPress={() => handleLogin()}>
              {" "}
              Login{" "}
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
