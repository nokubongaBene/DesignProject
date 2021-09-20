import React from 'react';
import {SafeAreaView,Alert, ScrollView, StatusBar, StyleSheet, Text, Image, useColorScheme, View,TouchableOpacity} from 'react-native';
import styles from "../styles/styles";
import flower2 from "../images/flower4.jpeg";
import {NavigationContainer } from '@react-navigation/native';


export default Login = ({navigation}) =>{
    const handleSignUp = () => {
        navigation.navigate('register');
        
      };
    
      const handleSignIn = () => {
        navigation.navigate('welcome');
      };
    
    return(
    <View style={styles.container}>
        <Image source={flower2} style={styles.image} />
        <View style={styles.viewText}>
        <Text style={styles.heading}>Hello, Artist</Text>
        </View>
        <TouchableOpacity style={styles.textSign}  onPress={() =>handleSignUp()}>
            <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textSignIn} onPress={() =>handleSignIn()}>
            <Text style={styles.signIn}>Sign In</Text>
            </TouchableOpacity>
    </View>
  

     
    );
  }
 

  