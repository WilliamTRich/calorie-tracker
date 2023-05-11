import { View, Text, TextInput, Button} from 'react-native'
import React, {useState, useContext} from 'react'
import axios from 'axios'
import * as SecureStore from 'expo-secure-store';

//Contexts
import AuthContext from '../hooks/AuthProvider'
const SignIn = () => {
  
    const {user, setUser} = useContext(AuthContext);
    
    const loginUser = user => {
        axios.post('http://localhost:3001/api/login', user)
            .then(res => {
                SecureStore.setItemAsync('userId', user.Id);
                setUser({username: user.username, userId: res.data.id})
            })
            .catch(err => {
                console.log(err);
            })
    }

  return (
    <View className="h-full w-full p-4 border-2 border-black">
        <View className="w-full h-40 justify-center pl-5 border-2 border-red-500">
            <Text className="text-3xl text-blue-600">Welcome</Text>
            <Text className="text-gray-500">Login to your account</Text>
        </View>
        <View className="w-full h-96 justify-evenly items-center border-2 border-green-400">
            <TextInput className="h-12 w-3/5 border-2 border-gray-400 p-2 rounded-xl" placeholder='username'/>
            <TextInput className="h-12 w-3/5 border-2 border-gray-400 p-2 rounded-xl" placeholder='password'/>
            <Button title='Login!' />
        </View>
    </View>
  )
}

export default SignIn;