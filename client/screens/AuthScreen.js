import { View, Text, SafeAreaView} from "react-native";
import React, {useLayoutEffect} from "react";
import { useNavigation } from "@react-navigation/native";

//Components
import SignIn from "../components/SignIn";

const AuthScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <SafeAreaView>
      <SignIn />
    </SafeAreaView>
  );
};

export default AuthScreen;
