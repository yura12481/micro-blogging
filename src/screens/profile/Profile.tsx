import React from "react";
import { Text, View } from "react-native";

import useUserData from "../../utils/hooks/firebase/userDataHook/useUserData";
import useSignOut from "../../utils/hooks/firebase/signOutHook/useSignOut";

import CustomButton from "../../components/customButton/CustomButton";

import { styles } from "./styles";

const Profile: React.FC = () => {
  const { userEmail, displayName } = useUserData();
  const { handleSignOut } = useSignOut();

  const { container, emailText, userText } = styles;

  return (
    <View style={container}>
      <View>
        <Text style={emailText}>Welcome to your account {userEmail}!</Text>
        {displayName !== "Author" ? (
          <Text style={userText}>
            You are a {displayName} and you can comment on other users posts.
          </Text>
        ) : (
          <Text style={userText}>
            You are the {displayName} and you can create new posts.
          </Text>
        )}
      </View>
      <CustomButton title="LOGOUT" onPress={handleSignOut} />
    </View>
  );
};

export default Profile;
