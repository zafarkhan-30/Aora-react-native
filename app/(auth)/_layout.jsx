import { SafeAreaView, Text } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
    <Stack>
      <Stack.Screen 
      name="sign-In"
      options={{
        headerShown : false
      }}
      />
      <Stack.Screen 
      
      name="sign-up"
      options={{
        headerShown : false
      }}
      />
    </Stack>
    <StatusBar backgorundColor="#161622"
    style="light"/>
    </>
  )
}

export default AuthLayout