import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {

    const { styleButton, styleText } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={styleButton}>
            <Text style={styleText}>{children}</Text>
        </TouchableOpacity>
    );
}
 
const styles = {
    styleButton: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#e7563f',
        marginLeft: 5,
        marginRight: 5,
        padding: 10,
        alignItems: 'center'
    },
    styleText: {
        color: '#fff',
        alignSelf: 'center'
    }
};

export default Button;
