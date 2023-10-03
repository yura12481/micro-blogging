import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import useUserData from "../../utils/hooks/firebase/userDataHook/useUserData";
import useDeletePost from "../../utils/hooks/firebase/deleteCurrentPostHook/useDeletePost";
import { Post } from "../../utils/hooks/firebase/getPostsHook/types";

import { RootStackParams } from "../../navigation/mainNavigation/types";

import { styles } from "./styles";

const PostsList: React.FC<Post> = ({ id, title, details, email }) => {
  const { displayName, userEmail } = useUserData();
  const { deletePost } = useDeletePost(id);

  const { container, titleText, detailsText, button, buttonText } = styles;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("FullPost", { id })}
        >
          <Text style={titleText}>{title}</Text>
          <Text style={detailsText}>{details}</Text>
        </TouchableOpacity>
      </View>
      {displayName === "Author" && userEmail === email && (
        <TouchableOpacity style={button} onPress={deletePost}>
          <Text style={buttonText}>Remove</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PostsList;
