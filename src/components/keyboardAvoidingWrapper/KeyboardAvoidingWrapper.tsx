import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";

import { KeyboardAvoidingWrapperProps } from "./types";

const KeyboardAvoidingWrapper: React.FC<KeyboardAvoidingWrapperProps> = ({
  children,
  containerStyle,
  keyboardContainer,
}) => {
  const isIos = Platform.OS === "ios";

  return (
    <KeyboardAvoidingView
      style={keyboardContainer}
      behavior={isIos ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={containerStyle}>{children}</View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
