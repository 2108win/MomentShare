import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen"; // Đường dẫn đến tệp LoginScreen

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* Thêm các màn hình đăng ký tại đây (nếu cần) */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
