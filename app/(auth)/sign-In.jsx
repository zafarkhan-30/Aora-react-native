import { View, Text , ScrollView , Image} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants';
import FormField from '../../components/FormField';

const signIn = () => {
  const [form, setForm] = useState({
    email: '',
    password : ''

  })
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
      <View className="w-full justify-center h-full px-4 my-6">
        <Image source={images.logo} resizeMode = 'contain'  className="w-[115px] h-[35px]"/>
        <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Login to Aora</Text>
        
        <FormField
        title = "Email"
        value={form.email}
        handleChangeText={(e) => setForm({...form,
          email:e
        })}
        otherStyles="mt-7"
        keyboardType ="email-address"
        />
        <FormField
        title = "password"
        value={form.password}
        handleChangeText={(e) => setForm({...form,
          password:e
        })}
        otherStyles="mt-7"
        
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signIn