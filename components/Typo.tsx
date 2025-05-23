import { colors } from "@/constants/theme";
import { TypoProps } from "@/types";
import { verticalScale } from "@/utils/styling";
import React from "react";
import { Text, TextStyle, View } from "react-native";

function Typo({
  size,
  color = colors.text,
  fontWeight = "400",
  children,
  style,
  textProps = {},
}: TypoProps) {

    const textStyle: TextStyle = {
        fontSize: size? verticalScale(size): verticalScale(18),
        color,
        fontWeight
    }
  return (
    <Text style={[textStyle, style]}>{children}</Text>
  );
}

export default Typo;
