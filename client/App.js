import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator"; // Đường dẫn đến AuthNavigator
import { useFonts } from 'expo-font';
const App = () => {
  const [loaded] = useFonts({ 
    'Lexend': require('./assets/fonts/Lexend-Regular.ttf'),
    'Lexend-Bold': require('./assets/fonts/Lexend-Bold.ttf'),
    'Lexend-SemiBold': require('./assets/fonts/Lexend-SemiBold.ttf'),
    'Lexend-Medium': require('./assets/fonts/Lexend-Medium.ttf'),
    'Lexend-Light': require('./assets/fonts/Lexend-Light.ttf'),
  });

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
