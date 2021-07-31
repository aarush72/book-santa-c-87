import React from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native';
import BookDonateScreen from '../screens/BookDonateScreen'
import BookRequestScreen from '../screens/BookRequestScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Image} from 'react-native'
import { AppStackNavigator } from './AppStackNavigator';

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks: {
        screen: AppStackNavigator,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/request-list.png")}
                style={{ width: 20, height: 20 }} />, tabBarLabel: "Donate Books",
        }
    },

    BookRequest: {
        screen: BookRequestScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/request-book.png")}
                style={{ width: 20, height: 20 }} />,
            tabBarLabel: "Book Request",
        }
    }
});


