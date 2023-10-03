import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import useUserData from "../../utils/hooks/firebase/userDataHook/useUserData";
import useDeleteComment from "../../utils/hooks/firebase/deleteCurrentCommentHook/useDeleteComment";

import { CommentsListProps } from "./types";

import { styles } from "./styles";

const CommentsList: React.FC<CommentsListProps> = ({
  id,
  commentId,
  text,
  email,
}) => {
  const { userEmail } = useUserData();
  const { deleteComment } = useDeleteComment(id, commentId);

  const { container, button, buttonText, title } = styles;

  return (
    <View style={container}>
      <View>
        <Text style={title}>{email}</Text>
        <Text>{text}</Text>
      </View>
      {userEmail === email && (
        <View>
          <TouchableOpacity style={button} onPress={deleteComment}>
            <Text style={buttonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CommentsList;
