import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

import { styles } from "./styles";

const CustomActivityIndicator: React.FC = () => {
  const { container, text } = styles;

  return (
    <View style={container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={text}>Loading...</Text>
    </View>
  );
};

export default CustomActivityIndicator;
