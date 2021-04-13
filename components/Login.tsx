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

const Login = () => {
  const [user, setUser] = useState<IUserLogin>({ email: "", password: "" });

  const handleLogin = () => {
    console.log("user", user);
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
          <Item style={MainStyle.formItem} stackedLabel last>
            <Label>Email</Label>
            <Input
              defaultValue={user.email}
              onChangeText={(value) => setUser({ ...user, email: value })}
            />
          </Item>
          <Item style={MainStyle.formItem} stackedLabel last>
            <Label>Password</Label>
            <Input
              defaultValue={user.password}
              secureTextEntry
              onChangeText={(value) => setUser({ ...user, password: value })}
            />
          </Item>
          <Button style={MainStyle.formBtn} primary>
            <Text style={MainStyle.fromBtnText} onPress={() => handleLogin()}>

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
