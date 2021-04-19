import React, { useState } from "react";
import {
  CardItem,
  Card,
  Content,
  Button,
  Item,
  Label,
  Input,
  Drawer,
  Text,
  Container,
  Icon,
  Body,
  Fab,
} from "native-base";
import { MainStyle } from "../styles";
import { Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
import AttendanceForm from "../components/Attendance";
import ChangePassword from "../components/ChangePassword";
import Logout from "../components/Logout";
export const Home = (props: any) => {
  const navigation = useNavigation();
  return (
    <Container style={MainStyle.container}>
      <Text style={{ fontSize: 40 }}>Home</Text>
      <Button
        style={MainStyle.formBtn}
        primary
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Image
          source={{
            uri:
              "https://freepikpsd.com/wp-content/uploads/2019/10/toggle-menu-icon-png-8-Transparent-Images.png",
          }}
          style={{ height: 40, width: 40 }}
        />
      </Button>
      <Content contentContainerStyle={MainStyle.contentContainerStyle}>
        {/* <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Text>Menu</Text>
        </Button> */}
        <Card>
          <CardItem
            style={{
              backgroundColor: "rgba(19, 138, 202, 0.637);",
              height: 60,
            }}
          >
            <Body></Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem
            style={{ backgroundColor: "rgba(66, 40, 211, 0.521);", height: 60 }}
          >
            <Body></Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem
            style={{ backgroundColor: "rgba(212, 27, 14, 0.671);", height: 60 }}
          >
            <Body></Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem
            style={{ backgroundColor: "rgba(45, 184, 75, 0.877);", height: 60 }}
          >
            <Body></Body>
          </CardItem>
        </Card>

        <Fab onPress={() => props.navigation.navigate("Attendance")}>
          <Text>+</Text>
        </Fab>
      </Content>
    </Container>
  );
};

export const HomeScreen = (props: any) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          drawerIcon: ({ focused, size }) => (
            <Image
              source={{
                uri:
                  "https://icons-for-free.com/iconfiles/png/512/default+home+house+main+menu+icon-1320086046804091155.png",
              }}
              style={{ height: size, width: size }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          title: "ChangePassword",
          drawerIcon: ({ focused, size }) => (
            <Image
              source={{
                uri: "http://cdn.onlinewebfonts.com/svg/img_398183.png",
              }}
              style={{ height: size, width: size }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          title: "Logout",
          drawerIcon: ({ focused, size }) => (
            <Image
              source={{
                uri:
                  "https://image.shutterstock.com/image-vector/logout-icon-260nw-609798833.jpg",
              }}
              style={{ height: size, width: size }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default HomeScreen;
