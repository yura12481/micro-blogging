import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    flexWrap: "wrap",
    paddingVertical: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: SIZES.medium,
  },

  button: {
    backgroundColor: COLORS.red,
    borderRadius: 10,
    height: 35,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  buttonText: {
    fontSize: SIZES.small,
    color: COLORS.white,
  },
});
