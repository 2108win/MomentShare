import {
  ImageBackground,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
  InputAccessoryView,
  TextInput,
  Button,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
type Props = {
  navigation: any;
};

const Register = (props: Props) => {
  const inputAccessoryViewID = "uniqueID";
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [isSecureTextEntry2, setIsSecureTextEntry2] = useState(true);

  return (
    <ImageBackground
      source={require("../assets/images/background/bg-bottom-gradient.png")}
      className="flex-1 bg-cover bg-basicBlack">
      <SafeAreaView className="flex-col items-center justify-center flex-1 w-full px-4 py-6 space-y-6 md:space-y-8">
        <View className="items-center justify-center space-y-2">
          {/* <View className="justify-center w-52 h-72 md:h-80 md:w-60">
            <Image
              className="w-full h-full bg-contain"
              source={require("../assets/images/welcome/welcome-2.png")}
            />
          </View> */}
          <Text className="text-4xl text-center md:text-4xl text-basicWhite font-lexendExtraB">
            Welcome to MomentShare!
          </Text>
        </View>
        <View className="flex-col items-center justify-center space-y-4">
          <Text className="mb-4 text-xl text-center md:text-2xl font-lexendBold text-basicDarkGray">
            Let's get started by creating an account.
          </Text>
          <TextInput
            className="px-5 py-4 text-xl w-80 md:w-96 font-lexendSemiB text-basicWhite bg-darkWhite25 rounded-2xl"
            placeholder="Email address"
            placeholderTextColor="#808080"
            cursorColor={"#FFB800"}
            inputMode="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <View className="relative">
            <TextInput
              className="py-4 pl-5 pr-12 text-xl w-80 md:w-96 font-lexendSemiB text-basicWhite bg-darkWhite25 rounded-2xl"
              placeholder="Password"
              placeholderTextColor="#808080"
              cursorColor={"#FFB800"}
              textContentType="password"
              passwordRules="minlength: 8; required: lower; required: upper; required: digit; required: [-];"
              inputMode="text"
              secureTextEntry={isSecureTextEntry}
            />
            <View className="absolute bg-transparent top-4 right-4">
              <Ionicons
                name="eye-outline"
                size={24}
                color="#808080"
                onPress={() => {
                  setIsSecureTextEntry((prev) => !prev);
                }}
              />
            </View>
          </View>
          <View className="relative">
            <TextInput
              className="py-4 pl-5 pr-12 text-xl w-80 md:w-96 font-lexendSemiB text-basicWhite bg-darkWhite25 rounded-2xl"
              placeholder="Re-enter password"
              placeholderTextColor="#808080"
              cursorColor={"#FFB800"}
              textContentType="password"
              passwordRules="minlength: 8; required: lower; required: upper; required: digit; required: [-];"
              inputMode="text"
              secureTextEntry={isSecureTextEntry2}
            />
            <View className="absolute bg-transparent top-4 right-4">
              <Ionicons
                name="eye-outline"
                size={24}
                color="#808080"
                onPress={() => {
                  setIsSecureTextEntry2((prev) => !prev);
                }}
              />
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Register")}
            className="flex items-center justify-center px-8 py-4 text-center rounded-full bg-basicPrimary">
            <Text className="text-xl md:text-2xl font-lexendBold text-basicOnyx">
              Create an account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Login")}
            className="flex items-center justify-center px-8 py-4 text-center rounded-full ">
            <Text className="text-xl md:text-2xl font-lexendBold text-basicDarkGray">Sign in</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Register;
