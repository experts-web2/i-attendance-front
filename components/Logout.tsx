import React, { useState } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Form,
  Text,
  Title,
  Thumbnail,
} from "native-base";
import { MainStyle } from "../styles";
const Logout = (props :any) => {


  return (
    <Container style={MainStyle.container}>
      <Content contentContainerStyle={MainStyle.contentContainerStyle}>
        <Title style={MainStyle.headerTitle}>Logout</Title>
        <Thumbnail
          style={MainStyle.logo}
          size={100}
          source={{
            uri: "https://logodix.com/logo/1829059.png",
          }}
        />
        <Form>
      

          <Button style={MainStyle.formBtn}  primary>
            <Text style={MainStyle.fromBtnText} onPress={() => props.navigation.navigate("Login")}>Logout</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};
export default Logout;