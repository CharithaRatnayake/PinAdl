import React from 'react';
import { Text } from 'react-native';

const ErrorText = (children) => {

    const { styleText } = styles;

    return (
        <Text style={styleText}>{children}</Text>
    );
}
 
const styles = {
    styleText: {
        color: '#FF0000',
        alignSelf: 'center'
    }
};

export default ErrorText;
