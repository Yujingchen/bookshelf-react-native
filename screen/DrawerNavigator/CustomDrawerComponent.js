import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Platform } from "react-native"
import colors from '../../assets/colors';
import { Ionicons } from "@expo/vector-icons"
import { DrawerItems } from "react-navigation"
class CustomDrawerComponent extends Component {
    render() {
        return (
            <ScrollView >
                <SafeAreaView style={{ backgroundColor: colors.bgMain }}>
                </SafeAreaView>
                <View style={{
                    height: 150, backgroundColor: colors.bgMain, alignItems: 'center', justifyContent: 'center',
                    paddingTop: Platform.OS == 'android' ? 20 : 0
                }}>
                    <Ionicons name="ios-bookmarks" size={100} color={colors.logoColor}></Ionicons>
                    <Text style={{ fontSize: 24, color: 'white', fontWeight: '100' }}>
                        Book Worm
                        </Text>
                </View>
                <DrawerItems {...this.props}></DrawerItems>
            </ScrollView>
        );
    }
}

export default CustomDrawerComponent;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})