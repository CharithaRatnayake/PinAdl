import React from 'react';
import { Text } from 'react-native';

const ErrorText = (children) => {

    const { styleText } = styles;

    return (
        <Text style={styleText}>{children}</Text>
    );
}
 
const styles = {
    styleButton: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#e7563f',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#c54d3a',
        marginLeft: 5,
        marginRight: 5,
        padding: 10,
        alignItems: 'center'
    },
    styleText: {
        color: '#f0f0f0',
        alignSelf: 'center'
    }
};

export default ErrorText;
