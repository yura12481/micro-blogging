import React from "react";
import { Text, TouchableOpacity, View, StatusBar } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import useGetCurrentPost from "../../utils/hooks/firebase/getCurrentPostHook/useGetCurrentPost";
import useGetComments from "../../utils/hooks/firebase/getCommentsHook/useGetComments";

import CustomActivityIndicator from "../../components/customActivityIndicator/CustomActivityIndicator";

import { RootStackParams } from "../../navigation/mainNavigation/types";

import { FullPostProps } from "./types";

import { styles } from "./styles";

const FullPost: React.FC<FullPostProps> = ({ route }) => {
  const { post, loading } = useGetCurrentPost(route.params.id);
  const { comments } = useGetComments(route.params.id);

  const {
    container,
    titleText,
    detailsContainer,
    detailsText,
    commentsContainer,
    button,
  } = styles;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <>
      {loading ? (
        <CustomActivityIndicator />
      ) : (
        <View style={container}>
          <Text style={titleText}>{post?.title}</Text>
          <View style={detailsContainer}>
            <Text style={detailsText}>{post?.details}</Text>
          </View>
          <View style={commentsContainer}>
            <TouchableOpacity
              style={button}
              onPress={() =>
                navigation.navigate("AddComment", { id: route.params.id })
              }
            >
              <Text>Comments</Text>
            </TouchableOpacity>
            <Text>({comments.length}) Comments</Text>
          </View>
          <StatusBar />
        </View>
      )}
    </>
  );
};

export default FullPost;
