import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  View,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import useAddComment from "../../utils/hooks/firebase/addCommentHook/useAddComment";
import useUserData from "../../utils/hooks/firebase/userDataHook/useUserData";
import useGetComments from "../../utils/hooks/firebase/getCommentsHook/useGetComments";

import CustomActivityIndicator from "../../components/customActivityIndicator/CustomActivityIndicator";
import CommentsList from "../../components/commentsList/CommentsList";
import KeyboardAvoidingWrapper from "../../components/keyboardAvoidingWrapper/KeyboardAvoidingWrapper";

import { RootStackParams } from "../../navigation/mainNavigation/types";

import { AddCommentProps } from "./types";

import { styles } from "./styles";

const AddComment: React.FC<AddCommentProps> = ({ route }) => {
  const [toggle, setToggle] = useState<boolean>(true);

  const {
    addComment,
    setText,
    text,
    loading: isLoading,
  } = useAddComment(route.params.id);
  const { comments, loading } = useGetComments(route.params.id);
  const { displayName } = useUserData();

  const {
    container,
    closeBtn,
    closeBtnText,
    addCommentContainer,
    addCommentBtn,
    addCommentText,
    commentText,
    textArea,
    buttonsContainer,
    cancelBtn,
    submitBtn,
    cancelBtnText,
    submitBtnText,
  } = styles;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <SafeAreaView style={container}>
      <TouchableOpacity style={closeBtn} onPress={() => navigation.goBack()}>
        <Text style={closeBtnText}>Close</Text>
      </TouchableOpacity>
      {displayName === "Commentator" && (
        <View style={addCommentContainer}>
          {toggle ? (
            <TouchableOpacity
              style={addCommentBtn}
              onPress={() => setToggle(!toggle)}
            >
              <Text style={addCommentText}>Add a comment</Text>
            </TouchableOpacity>
          ) : isLoading ? (
            <CustomActivityIndicator />
          ) : (
            <KeyboardAvoidingWrapper>
              <>
                <Text style={commentText}>Add a comment</Text>
                <TextInput
                  multiline
                  numberOfLines={10}
                  placeholder="Enter Add a comment"
                  value={text}
                  onChangeText={(newText) => setText(newText)}
                  style={textArea}
                />
                <View style={buttonsContainer}>
                  <TouchableOpacity
                    style={cancelBtn}
                    onPress={() => setToggle(!toggle)}
                  >
                    <Text style={cancelBtnText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={submitBtn}
                    onPress={() => addComment()}
                    disabled={!text}
                  >
                    <Text style={submitBtnText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </>
            </KeyboardAvoidingWrapper>
          )}
        </View>
      )}
      {loading && <CustomActivityIndicator />}
      {!comments.length ? (
        <Text style={commentText}>There are no comments available</Text>
      ) : (
        <FlatList
          data={comments}
          renderItem={({ item }) => (
            <CommentsList
              text={item.text}
              id={route.params.id}
              commentId={item.id}
              email={item.email}
            />
          )}
          keyExtractor={(post, index) => post.text + index}
        />
      )}
    </SafeAreaView>
  );
};

export default AddComment;
