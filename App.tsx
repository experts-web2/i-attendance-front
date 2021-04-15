import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import ChangePassword from "./components/ChangePassword";
import ConfirmPassword from "./components/ConfirmPassword";
import Home from "./components/Home";
import Attendance from "./components/Attendance";

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

export default function App() {
  const [isAuthentication, setIsAuthentication] = useState(true);
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
      
          <Stack.Screen
            name="Test1"
            options={{ headerShown: false }}
            component={Test1}
          />
            <Stack.Screen
            options={{ headerShown: false }}
            name="Test2"
            component={Test2} 
  
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export const Test1 = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
};
export const Test2 = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <HomeStack.Screen name="Attendance" component={Attendance} />
    </HomeStack.Navigator>
  );
};
