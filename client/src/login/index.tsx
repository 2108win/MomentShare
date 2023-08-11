import { ImageBackground, Dimensions, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
type Props = {
  navigation: any;
};

const Login = (props: Props) => {
  const width = Dimensions.get("window").width;
  return (
    <SafeAreaProvider className="flex-1 flex-col bg-darkMainBg">
      <ImageBackground
        source={require("../assets/images/background/bg-top-gradient.png")}
        className="flex-1 gap-6 md:gap-8 px-4 justify-center bg-cover">
        <View className="flex items-center justify-center gap-4">
          {/* <Image
            className="h-72 w-52 md:h-80 md:w-60"
            source={require("../assets/images/welcome-2.png")}
          /> */}
          <Text className="text-4xl md:text-6xl text-basicWhite font-lexendExtraB">Login now!</Text>
          <Text className="text-2xl md:text-4xl font-lexendBold text-center text-basicDarkGray">
            This is MomentShare
          </Text>
        </View>
        <View className="items-center flex justify-center">
          <TouchableOpacity
            onPressIn={() => props.navigation.navigate("Register")}
            className="bg-basicPrimary py-4 px-8 rounded-full text-center flex items-center justify-center"
            onPress={() => {}}>
            <Text className="text-xl md:text-2xl font-lexendBold text-basicOnyx">
              Create an account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => props.navigation.navigate("Login")}
            className=" py-4 px-8 rounded-full text-center flex items-center justify-center"
            onPress={() => {}}>
            <Text className="text-xl md:text-2xl font-lexendBold text-basicDarkGray">Sign in</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
};

export default Login;
