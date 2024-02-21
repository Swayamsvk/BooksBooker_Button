import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";

interface TypographyProps {
  children: any;
  fontFamily: string;
  fontSize: string | number;
  fontColor: string;
  fontWeight: string | number;
  extraStyle?: any;
  onPress?: () => void;
}
const Typography: FC<TypographyProps> = ({
  children,
  fontFamily,
  fontSize,
  fontColor,
  fontWeight,
  extraStyle,
  onPress,
}) => {
  return (
    <Text
      onPress={onPress}
      style={[
        { fontFamily, fontSize, color: fontColor, fontWeight },
        extraStyle,
      ]}
    >
      {children}
    </Text>
  );
};

export { Typography };
