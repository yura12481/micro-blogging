import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.silver,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  titleText: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    maxWidth: 250,
  },
  detailsText: {
    fontSize: SIZES.small,
    maxWidth: 250,
  },
  button: {
    backgroundColor: COLORS.red,
    borderRadius: 10,
    height: 35,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: SIZES.small,
    color: COLORS.white,
  },
});
