import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Điều này sẽ được cài đặt sau khi có hệ thống xác thực phía server
    console.log("Đăng nhập với:", email, password);
  };

  return (
    <View className="items-center justify-center flex-1">
      <Text className="mb-4 text-2xl font-bold font-lexend">What's your email?</Text>
      <TextInput
        className="w-4/5 p-2 mb-4 border rounded"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="w-4/5 p-2 mb-4 border rounded"
        placeholder="Mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View className="px-4 py-2 rounded-md bg-darkGray">
        <Button title="Đăng Nhập" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LoginScreen;
