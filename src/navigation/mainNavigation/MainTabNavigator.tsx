import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import useUserData from "../../utils/hooks/firebase/userDataHook/useUserData";

import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

import Home from "../../screens/home/Home";
import CreatePost from "../../screens/createPost/CreatePost";
import Profile from "../../screens/profile/Profile";

import { RootTabParams } from "./types";

const TabNavigator: React.FC = () => {
  const { displayName } = useUserData();

  const Tab = createBottomTabNavigator<RootTabParams>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      {displayName === "Author" && (
        <Tab.Screen
          name="CreatePost"
          component={CreatePost}
          options={{
            title: "Create Post",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="pencil" color={color} size={size} />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
