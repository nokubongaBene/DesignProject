import React from 'react';
import {SafeAreaView,Alert, TextInput, ScrollView, StatusBar, StyleSheet, Text, Image, useColorScheme, View,TouchableOpacity} from 'react-native';
import styles from "../styles/styles";
import flower1 from "../images/background2.jpeg";
import flower2 from "../images/current.jpeg";
import flower4 from "../images/tryme.jpeg";
import {NavigationContainer } from '@react-navigation/native';


export default function upload({navigation}) {
    const handleLogIn = () =>{
        navigation.navigate('upload')
    }
    return(
    <View style={styles.welcome}>
        <Image source={flower4} style={styles.imageLog} />
        <View style={styles.cardOrange}>
        <Image source={flower1} style={styles.imagecard} />
        <View style={styles.bordStyle}>
        <Image source={flower2} style={styles.bordStyle} />
        </View>
        <View style={styles.descText}>
        <Text style={styles.flowerText}>Flower Illustration</Text>
        <Text style={styles.description}>A simple flower,</Text>
        <Text style={styles.description}>that's all it shall take.</Text>
        <Text style={styles.description}>For another soul,</Text>
        <Text style={styles.description}>to smile and wake</Text>
        </View>
      
    
        
    </View>
    <TouchableOpacity style={styles.textUpload} onPress={() =>handleLogIn()}>
            <Text style={styles.upload}>Upload your work +</Text>
            </TouchableOpacity>
    </View>
     
    );
  }
 