import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Header = props => {
    return(
        <View style={styles.head}>
            <Text style={styles.headTilt}>{props.title}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    head: {
        width:'100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headTilt:{
        color: 'black',
        fontSize: 18,
    }
});
export default Header;