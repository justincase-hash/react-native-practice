import React from 'react';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import { FlatList, StyleSheet, View } from 'react-native'
import colors from '../config/colors';
import Icon from '../components/Icon';
const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        }
    }, 
    {
        title: "My Messages",
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Justin"
                    subTitle="justinbunag1998@gmail.com"
                    image={require('../assets/background.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) =>
                        <ListItem 
                            title={item.title}
                            imageComponent={
                                <Icon name={item.icon.name}
                                      backgroundColor={item.icon.backgroundColor}
                                />
                            }
                         
                        />
                    }
                />

            </View>
        </Screen>
    );
}
 
const styles = StyleSheet.create({ 
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical : 20
    }
})
export default AccountScreen;