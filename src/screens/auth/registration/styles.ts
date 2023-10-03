import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  keyboardContainer: { flex: 1 },
  titleText: {
    fontSize: SIZES.xxLarge,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  registerContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  registerText: {
    fontSize: SIZES.large,
    marginHorizontal: 5,
  },
  registerLink: {
    fontSize: 18,
    color: COLORS.blue,
    textDecorationLine: "underline",
    textDecorationColor: COLORS.blue,
    textDecorationStyle: "solid",
  },
});
