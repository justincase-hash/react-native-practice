import React from 'react'; 
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView } from 'react-native';

function Screen({children}) {
    return (
        <SafeAreaView style={styles.screen}>
            <View> {children} </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: constants.statusBarHeight
    }
})

export default Screen;