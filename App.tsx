import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./components/Login"
import Signup from "./components/Signup"
import ForgotPassword from "./components/ForgotPassword"
import ChangePassword from "./components/ChangePassword"
import ConfirmPassword from "./components/ConfirmPassword"
export default function App() {
  return (
    <View style={styles.container}>
      <Signup/>
      <StatusBar style="auto" />
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
