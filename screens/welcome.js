import React from 'react';
import {SafeAreaView,Alert, TextInput, ScrollView, StatusBar, StyleSheet, Text, Image, useColorScheme, View,TouchableOpacity} from 'react-native';
import styles from "../styles/styles";
import flower2 from "../images/flower4.jpeg";
import email from "../images/email.jpeg";
import lock from "../images/lock.jpeg";
import {NavigationContainer } from '@react-navigation/native';


export default function welcome({navigation}) {
    const handleLogIn = () =>{
        navigation.navigate('upload')
    }
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
        
    
        <TouchableOpacity style={styles.textLogin} onPress={() =>handleLogIn()}>
            <Text style={styles.Login}>Login</Text>
            </TouchableOpacity>
    </View>
    </View>
     
    );
  }
 