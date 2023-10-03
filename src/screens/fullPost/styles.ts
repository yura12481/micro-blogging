import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  titleText: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  detailsContainer: {
    borderBottomColor: COLORS.silver,
    borderBottomWidth: 2,
  },
  detailsText: {
    fontSize: SIZES.small,
    paddingVertical: 20,
  },
  commentsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  button: {
    padding: 10,
    backgroundColor: COLORS.blue,
    borderRadius: 10,
  },
});
