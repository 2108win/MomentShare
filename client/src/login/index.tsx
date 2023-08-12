import {
  ImageBackground,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
type Props = {
  navigation: any;
};

const Login = (props: Props) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = React.useState(true);
  return (
    <ImageBackground
      source={require("../assets/images/background/bg-bottom-gradient.png")}
      className="flex-1 bg-cover bg-basicBlack">
      <SafeAreaView className="flex-col items-center justify-center flex-1 px-4 py-6 space-y-6 md:space-y-8">
        <View className="items-center justify-center space-y-2">
          {/* <View className="justify-center w-52 h-72 md:h-80 md:w-60">
            <Image
              className="w-full h-full bg-contain"
              source={require("../assets/images/welcome/welcome-2.png")}
            />
          </View> */}
          <Text className="text-4xl md:text-6xl text-basicWhite font-lexendExtraB">Login!</Text>
        </View>
        <View className="relative flex-col space-y-4">
          <Text className="text-2xl text-center md:text-4xl font-lexendBold text-basicDarkGray">
            What's your email?
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
        </View>
        <View className="relative flex-col items-center justify-center">
          <TouchableOpacity>
            <View className="flex-row items-center justify-center px-8 py-4 space-x-2 rounded-full bg-basicPrimary">
              <Text className="text-xl md:text-2xl font-lexendBold text-basicOnyx">Next</Text>
              <Ionicons name="arrow-forward" size={24} color={"#181818"} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
            <View className="flex-row items-center justify-center px-8 py-4 space-x-2 rounded-full">
              <Text className="text-xl md:text-2xl font-lexendBold text-basicDarkGray">
                Create a new account
              </Text>
              {/* <Ionicons name="arrow-forward" size={24} color={"#181818"} /> */}
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;
