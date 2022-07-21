import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground
                blurRadius={10}
                style={styles.background}
                source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo-red.png')} 
                /> 
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
                     
            </View>
        
            <View style={styles.buttonsContainer}>

            <AppButton title="Login" onPress={() => console.log("Tapped")} />
            <AppButton title="Register" onPress={() => console.log("Tapped")} color="secondary" />
            <View style={styles.registerButton}></View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        blurRadius: 6
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,
        position: "absolute",
        top: 50
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    }
});

export default WelcomeScreen;