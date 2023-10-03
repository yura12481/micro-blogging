import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { CustomButtonProps } from "./types";

import { styles } from "./styles";

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  disabled,
  onPress,
}) => {
  const { button, buttonText } = styles;

  return (
    <TouchableOpacity style={button} onPress={onPress} disabled={disabled}>
      <Text style={buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
