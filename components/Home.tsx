import React, { useState } from "react";
import {
  CardItem,
  Card,
  Content,
  Button,
  Item,
  Label,
  Input,
  Drawer ,
  Text,
  Container,
  Icon,
  Body,
} from "native-base";
import { MainStyle } from "../styles";
const Home = (props: any) => {


  return (
    <Container style={MainStyle.container}>
      <Content contentContainerStyle={MainStyle.contentContainerStyle}>
        <Text style={{ fontSize: 30 }}>Home</Text>

        {/* <Card >
            <CardItem style={{backgroundColor :"rgba(19, 138, 202, 0.637);"}}>
              <Body >
               
              </Body>
            </CardItem>
          </Card>
          <Card >
            <CardItem style={{backgroundColor :"rgba(66, 40, 211, 0.521);"}}>
            <Body >
               
               </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={{backgroundColor :"rgba(212, 27, 14, 0.671);"}}>
              <Body>
               
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={{backgroundColor :"rgba(45, 184, 75, 0.877);"}}>
              <Body>
               
              </Body>
            </CardItem>
          </Card> */}

        <Button
          style={MainStyle.formBtn}
          onPress={() => props.navigation.navigate("Attendance")}
        >
          <Text>Attentdance</Text>
        </Button>
      </Content>
    </Container>
  );
};
export default Home;
