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
} from "native-base";


const Login = () => {
  return (
    <Container>
      <Header>
        <Title>Login</Title>
      </Header>
      <Content>
        <Form>
          <Item stackedLabel>
            <Label>Email</Label>
            <Input />
          </Item>
          <Item stackedLabel last >
            <Label>Password</Label>
            <Input secureTextEntry />
          </Item>
          <Button primary>
            <Text> Login </Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};
export default Login;
