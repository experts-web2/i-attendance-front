import React, { useState } from "react";
import {
  View,
  Header,
  Content,
  Button,
  Form,
  Item,
  Label,
  Input,
  Text,
  Container,
  Thumbnail,
} from "native-base";
import { MainStyle } from "../styles";

const Home = (props: any) => {
  return (
    <Container style={MainStyle.container}>
      <Text>
        {" "}
        Hello Home{" "}
        <Button
          
          onPress={() => props.navigation.navigate("Attendance")}
        ><Text>Go</Text></Button>{" "}
      </Text>
    </Container>
  );
};
export default Home;
