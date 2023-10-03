import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

export const styles = StyleSheet.create({
  button: {
    height: 50,
    width: "90%",
    backgroundColor: COLORS.blue,
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
    color: COLORS.white,
  },
});
