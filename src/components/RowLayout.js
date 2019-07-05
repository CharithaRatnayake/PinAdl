// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component
const RowLayout = (props) => {
    const { rowStyle } = styles;

    return (
        <View style={rowStyle}>{props.children}</View>
    );
};

const styles = {
    rowStyle: {
        backgroundColor: '#fff',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 3
        flex: 1
    }
};

//Make the component available to other parts
export default RowLayout;
