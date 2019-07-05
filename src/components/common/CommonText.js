import React from 'react';
import { Text } from 'react-native';

const CommonText = (props) => {

    const { styleText } = styles;
    
    return (
        <Text style={styleText}>{props.textContent}</Text>
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
        color: '#fff',
        alignSelf: 'center'
    }
};

export default CommonText;
