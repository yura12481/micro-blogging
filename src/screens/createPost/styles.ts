import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 15,
  },
  keyboardContainer: { flex: 1 },
  addInfoText: {
    marginTop: 15,
    color: COLORS.green2,
  },
  title: {
    marginTop: 10,
    fontSize: SIZES.large,
  },
  titleTextArea: {
    marginVertical: 20,
    width: "90%",
    borderColor: COLORS.silver,
    borderWidth: 1,
    padding: 8,
    fontSize: SIZES.medium,
    textAlignVertical: "top",
    height: 40,
  },
  detailsTextArea: {
    marginVertical: 20,
    width: "90%",
    borderColor: COLORS.silver,
    borderWidth: 1,
    padding: 8,
    fontSize: SIZES.medium,
    textAlignVertical: "top",
    height: 200,
  },
});
