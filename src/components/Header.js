import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => (
    <View style={style.container}>
    <Text style={style.title}>{ props.title}</Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor: '#2239a1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        color: '#fff',
    },
});



export default Header;