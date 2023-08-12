import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import React, { useState } from "react";
import * as Font from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./src/welcome";
import Login from "./src/login";
import Register from "./src/register";

let customFonts = {
  "Lexend-Regular": require("./assets/fonts/Lexend-Regular.ttf"),
  "Lexend-Medium": require("./assets/fonts/Lexend-Medium.ttf"),
  "Lexend-SemiBold": require("./assets/fonts/Lexend-SemiBold.ttf"),
  "Lexend-Bold": require("./assets/fonts/Lexend-Bold.ttf"),
  "Lexend-ExtraBold": require("./assets/fonts/Lexend-ExtraBold.ttf"),
};
const Stack = createNativeStackNavigator();
NativeWindStyleSheet.setOutput({
  default: "native",
});

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      // <View className="items-center justify-center flex-1 w-full px-4 bg-[#181818]">
      //   <Welcome />
      //   <StatusBar style="light" />
      // </View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
          <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
          <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    );
  }
}
