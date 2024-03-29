import React from 'react';
import { View, StyleSheet,Image,TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText'; 
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({title, subTitle, image, imageComponent, onPress,renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
            underlayColor={colors.light}
            onPress={onPress}>
                <View style={styles.detailsContainer}>
                   {imageComponent}
                   { image && <Image style={styles.image} source={image} /> }
                    <View>
                        <AppText style={styles.title}>{title}</AppText>
                       { subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View> 
            </TouchableHighlight>
        </Swipeable>
        
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    }, 
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: "500"
    }
})

export default ListItem;