import React from "react";
import { useWindowDimensions, View } from "react-native";

interface BackgroundProps {
  children?: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  const { height, width } = useWindowDimensions();

  // يمكنك تغيير هذه القيم للتحكم في حجم وموقع الدوائر
  const circleSize = height;
  const borderRadius = height * 2.5;

  // تعريف أنماط (styles) الدوائر في مصفوفة لتقليل تكرار الكود
  const circles = [
    {
      top: height - height * 1.3,
      left: width - height * 0.15,
    },
    {
      top: height - height * 0.5,
      left: width - height * 0.3,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      {circles.map((style, index) => (
        <View
          key={index}
          style={{
            position: "absolute",
            width: circleSize,
            height: circleSize,
            backgroundColor: "black",
            opacity: 0.5,
            borderRadius: borderRadius,
            ...style, // هنا يتم دمج الأنماط المحددة لكل دائرة
          }}
        />
      ))}
      {children}
    </View>
  );
};

export default Background;
