import React, { useRef, useEffect } from "react";
import { Animated, ImageBackground } from "react-native";

const LoopingImageBackground: React.FC<{ source: any }> = ({ source }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
      {
        iterations: -1,
      }
    ).start();
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <ImageBackground source={source} style={{ width: "100%", height: "100%" }}>
        {/* Your content */}
      </ImageBackground>
    </Animated.View>
  );
};

export default LoopingImageBackground;
