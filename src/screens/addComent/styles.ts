import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  closeBtn: {
    marginVertical: 10,
    marginLeft: "auto",
    backgroundColor: COLORS.silver,
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 15,
  },
  closeBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  addCommentContainer: {
    paddingVertical: 10,
    borderBottomColor: COLORS.silver,
    borderBottomWidth: 2,
    marginBottom: 15,
  },
  addCommentBtn: {
    backgroundColor: COLORS.blue,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 40,
    borderRadius: 10,
  },
  addCommentText: {
    color: COLORS.white,
  },
  commentText: {
    marginVertical: 10,
    fontSize: SIZES.medium,
  },
  textArea: {
    borderWidth: 1,
    width: "100%",
    padding: 8,
    fontSize: SIZES.medium,
    textAlignVertical: "top",
    height: 150,
    borderRadius: 15,
  },
  buttonsContainer: {
    alignItems: "center",
    marginVertical: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 40,
    backgroundColor: COLORS.silver,
    borderRadius: 5,
  },
  cancelBtnText: {
    color: COLORS.white,
  },
  submitBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 40,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
  },
  submitBtnText: {
    color: COLORS.white,
  },
});
