import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    marginHorizontal: 15,
  },
  emailText: {
    marginTop: 10,
    fontSize: SIZES.large,
    fontWeight: "bold",
    textAlign: "center",
  },
  userText: {
    marginTop: 10,
    color: COLORS.green,
    fontSize: SIZES.large,
    fontWeight: "bold",
    textAlign: "center",
  },
});
