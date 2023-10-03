import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/theme";

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: COLORS.silver,
    borderRadius: 1,
    height: 50,
    width: "90%",
    marginTop: 10,
    paddingLeft: 15,
  },
  dropDownPickerContainer: {
    alignSelf: "center",
    width: "90%",
    marginBottom: 10,
  },
});
