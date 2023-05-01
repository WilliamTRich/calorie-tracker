import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })

  return (
    <SafeAreaView>
        <View>
            <Text>Today</Text>
            <View className="flex-row gap-3">
                <Image className="flex w-25 h-25" source={require('../assets/baby.jpg')}/>
                <View className="gap-3">
                    <Text>Calories</Text>
                    <Text>Protein</Text>
                    <Text>Fat</Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen