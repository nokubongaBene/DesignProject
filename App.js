import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image} from 'react-native';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Login  from './screens/Login';
import register  from './screens/register';
import welcome  from './screens/welcome';
import upload  from './screens/upload';


const Stack = createNativeStackNavigator();


export default function App({navigation}) {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}} >
        <Stack.Screen name="logIn" component={Login}/>
        <Stack.Screen name="register" component={register} />
        <Stack.Screen name="welcome" component={welcome} />
        <Stack.Screen name="upload" component={upload} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.orange,
  }
})