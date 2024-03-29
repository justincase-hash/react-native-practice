import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={35} />    
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />  
            </View>
        <Image
            resizeMode="contain" //fitting the size of the image to the screen w/o crop.
            style={styles.image} source={require('../assets/chair.jpg')} 
        />
        </View>
    );
}


const styles = StyleSheet.create({
    closeIcon: {
        position: "absolute",
        top: 40,
        left: 30
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    image: {
        width: '100%',
        height: '100%'
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        left: 30
    },
})
export default ViewImageScreen;