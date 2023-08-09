import React, { useState } from "react";
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
      <Text className="mb-4 text-2xl">Đăng Nhập</Text>
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
      <Button title="Đăng Nhập" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
