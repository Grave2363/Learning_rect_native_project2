import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
const cardLook = props => {
    return <View style={{...styles.cardLookingThing, ...props.style}}>{props.children}</View>
};
const styles = StyleSheet.create({
    cardLookingThing:{
        width: 400,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.3,
        backgroundColor: 'white',
        elevation: 5,
        padding: 25,
        borderRadius: 20
    },
});
export default cardLook;