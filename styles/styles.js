import React from 'react';
import colors from "../constants/colors";
import {StyleSheet, Dimensions} from 'react-native';
let width= Dimensions.get('window').width
let height= Dimensions.get('window').height


export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#eb7f13',
        width : width,
        height: height,

    },
    heading: {
        fontSize: 60,
        color: '#fff',
        fontWeight: 'bold',

    },
    viewText:{
        width: width * 0.5,
        marginTop: height * 0.25,
        marginLeft: width * 0.09,

    },
    signUp:{
        color: colors.white,
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 25,
        

    },
    textSign: {
        borderRadius: 30,
        borderWidth: 3,
        borderColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.8,
        marginLeft: width * 0.09,
        height: height * 0.08,
        marginTop: height * 0.22,
    },
    signIn: {
        color: colors.white,
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 25,
        color: colors.orange,
    },
    textSignIn:{
        borderRadius: 30,
        borderWidth: 3,
        borderColor: colors.orange,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.8,
        marginLeft: width * 0.09,
        height: height * 0.08,
        marginTop: height * 0.05,
        backgroundColor: '#fff',
    },
    image:{
        marginLeft: width * 0.6,
        height: height * 0.40,
        width: width * 0.60,
        position:'absolute',
        borderRadius: 15,
    },
    welcome:{
        backgroundColor: '#eb7f13',
        width : width,
        height: height,  
    },
    welcomeText:{
        fontSize: 60,
        color: '#eb7f13',
        fontWeight: 'bold',
        marginLeft: width * 0.09,
        marginTop: height * 0.08,
    },
    card: {
        marginTop: height * 0.2,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#fff',
        shadowRadius: 5,
        width: width * 0.9,
        marginLeft: width * 0.05,
        height: height * 0.7

    },
    textLogin: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.8,
        marginLeft: width * 0.05,
        height: height * 0.08,
        marginTop: height * 0.05,
        backgroundColor: '#eb7f13',
    },
    Login:{
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 20,
        color: 'white',
    },
    loginTexts:{
        color: '#eb7f13',
        marginLeft: width * 0.05,
        marginTop: height * 0.05
    },
    imageLog:{
        position: 'absolute',
        height: height * 0.6,
        width: width ,

    },
    icons:{
        width : width * 0.08,
        height: height * 0.04,
        marginLeft: width * 0.04
    },
    input:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10,
        width: width * 0.75,
        marginLeft: width * 0.05
    },
    flowerText: {
        fontSize: 25,
        color: '#eb7f13',
        fontWeight: 'bold',
        marginLeft: width * 0.001,
        

        
    },
    description:{
        justifyContent: 'center',
        alignItems: 'center',

    },
    descText:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.1,
    },
    imagecard:{
        height: height * 0.3,
        width: width * 0.9, 
        borderRadius: 5,
        borderWidth: 2,
    },
    bordStyle:{
        backgroundColor:'orange',
        height: height * 0.20,
        width: width * 0.35, 
        borderRadius: 15,
        borderWidth: 4,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginLeft: width * 0.29,
        marginTop: height * 0.15
    },
    cardOrange:{
        marginTop: height * 0.15,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: '#fff',
        shadowRadius: 5,
        width: width * 0.9,
        marginLeft: width * 0.05,
        height: height * 0.6
    },
    upload: {
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 20,
        color: 'white',
        borderColor: 'white'

    },
    textUpload:{
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        marginLeft: width * 0.10,
        marginRight: width * 0.1,
        marginTop: height * 0.05,
        backgroundColor: 'orange',
        borderRadius: 29,
        height: height * 0.07
    }
})