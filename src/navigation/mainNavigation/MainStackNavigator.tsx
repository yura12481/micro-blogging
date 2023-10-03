import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./MainTabNavigator";
import FullPost from "../../screens/fullPost/FullPost";
import AddComment from "../../screens/addComent/AddComment";

import { RootStackParams } from "./types";

const MainStackNavigator: React.FC = () => {
  const RootStack = createNativeStackNavigator<RootStackParams>();

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="FullPost"
          component={FullPost}
          options={{
            title: "Single Post",
            headerBackTitle: "Back",
            headerTitleAlign: "center",
          }}
        />
        <RootStack.Screen
          name="AddComment"
          component={AddComment}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
