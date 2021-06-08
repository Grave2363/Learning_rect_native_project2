import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Input from '../Components/input';
import cardLook from '../Components/cardLook';

const StartScreen = props => {
    return(
        <View style={styles.screen}>
            <Text style={styles.title}> Start New Game??</Text>
            <cardLook style={styles.input}>
                <Text> Enter a Number</Text>
                <Input style={styles.inputBox}/>
                <View style={styles.buttonCon}>
                    <View style={styles.button}><Button title="Reset" onPress={() => {}} color='red'/></View>
                    <View style={styles.button}><Button title="Confirm" onPress={() => {}} color='green'/></View>
                </View>
            </cardLook>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems:'center',
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
    },
    input:{
        width: 400,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonCon:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 100
    },
    inputBox: {
        width: 75,
        textAlign: 'center',
    },
});
export default StartScreen;