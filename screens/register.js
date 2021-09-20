import React from 'react';
import {SafeAreaView,Alert, ScrollView, StatusBar, StyleSheet, Text, Image, useColorScheme, View,TouchableOpacity, TextInput} from 'react-native';
import styles from "../styles/styles";
import flower2 from "../images/tryme.jpeg";
import {NavigationContainer } from '@react-navigation/native';
import email from "../images/email.jpeg";
import lock from "../images/lock.jpeg";


export default function register({navigation}) {
      const handleSignUp = () => {
          navigation.navigate('upload');
          
        };
      
      return(
        <View style={styles.welcome}>
        <Image source={flower2} style={styles.imageLog} />
        <View style={styles.card}>
           
        <Text style={styles.welcomeText}>Welcome</Text>

        <Text style={styles.loginTexts}>Email</Text>
        <Image style={styles.icons} source={email} />
    <TextInput  editable={false} style={styles.input} />
    <Text style={styles.loginTexts}>Password:</Text>
    <Image style={styles.icons} source={lock} />
    <TextInput editable={false} style={styles.input} />
        
    
        <TouchableOpacity style={styles.textLogin} onPress={() =>handleSignUp()}>
            <Text style={styles.Login}>Register</Text>
            </TouchableOpacity>
    </View>
    </View>
    
  
       
      );
    }
   
  
    