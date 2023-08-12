import {
  ImageBackground,
  Dimensions,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
type Props = {
  navigation: any;
};

const Welcome = (props: Props) => {
  return (
    <ImageBackground
      source={require("../assets/images/background/bg-bottom-gradient.png")}
      className="flex-1 bg-cover bg-basicBlack">
      <SafeAreaView className="flex-col items-center justify-center flex-1 px-4 py-6 space-y-6 md:space-y-8">
        <View className="items-center justify-center space-y-4">
          <View className="justify-center w-52 h-72 md:h-80 md:w-60">
            <Image
              className="w-full h-full bg-contain"
              source={require("../assets/images/welcome/welcome-2.png")}
            />
          </View>
          <Text className="text-4xl md:text-6xl text-basicWhite font-lexendExtraB">Welcome!</Text>
          <Text className="text-2xl text-center md:text-4xl font-lexendBold text-basicDarkGray">
            Create your own story with your friends.
          </Text>
        </View>
        <View className="items-center">
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

export default Welcome;
