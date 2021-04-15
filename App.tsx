import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./components/Login"
import Signup from "./components/Signup"
import ForgotPassword from "./components/ForgotPassword"
import ChangePassword from "./components/ChangePassword"
import ConfirmPassword from "./components/ConfirmPassword"

const Stack = createStackNavigator();
export default function App() {
 
  return (
    <View style={styles.container}>
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
         
        />
          <Stack.Screen
          name="Signup"
          component={Signup}
         
        />
          <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
         
        />
      {/* <StatusBar style="auto" /> */}
     
   </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});


