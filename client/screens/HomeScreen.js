import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="h-full w-full">
      <View className="h-80 items-center mt-8 mx-4 p-4 border-2 border-black">
        <Text className="self-start ml-4 text-blue-500 text-4xl">Today</Text>
        <View className="flex-row mt-4 border-2 border-cyan-400 rounded-2xl p-6 items-center ">
          <Image
            className="rounded-3xl h-36 w-36"
            source={require("../assets/baby.jpg")}
          />
          <View className="w-44 items-center" style={{ gap: 24 }}>
            <Text>Calories</Text>
            <Text>Protein</Text>
            <Text>Fat</Text>
          </View>
        </View>
      </View>
      <View className="h-80 mt-6 items-center mx-4 p-4 border-2 border-red-500">
        <Text>Week</Text>
        <View className="">
          <Text>Placeholder for Data</Text>
        </View>
      </View>
      <View className="h-24 mt-8 mx-4 p-4 items-center border-2 border-green-400">
        <Text>Placeholder for Navigation</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
