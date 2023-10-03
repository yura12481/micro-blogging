import React from "react";
import { Text, TextInput } from "react-native";

import useCreatePost from "../../utils/hooks/firebase/createPostHook/useCreatePost";

import CustomButton from "../../components/customButton/CustomButton";
import KeyboardAvoidingWrapper from "../../components/keyboardAvoidingWrapper/KeyboardAvoidingWrapper";

import { styles } from "./styles";

const CreatePost: React.FC = () => {
  const { title, setTitle, details, setDetails, addPost, addInfo } =
    useCreatePost();

  const {
    container,
    title: text,
    titleTextArea,
    detailsTextArea,
    keyboardContainer,
    addInfoText,
  } = styles;

  return (
    <KeyboardAvoidingWrapper
      keyboardContainer={keyboardContainer}
      containerStyle={container}
    >
      <>
        {addInfo && <Text style={addInfoText}>{addInfo}</Text>}
        <Text style={text}>Title</Text>
        <TextInput
          multiline
          placeholder="Enter title..."
          value={title}
          onChangeText={(newText) => setTitle(newText)}
          style={titleTextArea}
        />
        <Text style={text}>Details</Text>
        <TextInput
          multiline
          numberOfLines={10}
          placeholder="Enter details..."
          value={details}
          onChangeText={(newText) => setDetails(newText)}
          style={detailsTextArea}
        />
        {!title || !details ? (
          <CustomButton title="SUBMIT" disabled={true} />
        ) : (
          <CustomButton title="SUBMIT" onPress={() => addPost()} />
        )}
      </>
    </KeyboardAvoidingWrapper>
  );
};

export default CreatePost;
