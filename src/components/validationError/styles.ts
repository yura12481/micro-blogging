import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

export const styles = StyleSheet.create({
  errorMessageContainer: {
    width: "90%",
    borderTopWidth: 3,
    borderTopColor: COLORS.red,
    marginHorizontal: 25,
  },
  errorMessage: {
    marginBottom: 3,
    marginLeft: 2,
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.red,
  },
});
