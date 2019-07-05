import React from 'react';
import { Text } from 'react-native';

const Circle = ({ isActive }) => {

    const { styleCircleFill, styleCircle } = styles;

    if(isActive){
        return (
            <View style={styleCircleFill}/>
        );
    }else{
        return (
            <View style={styleCircle}/>
        );
    }

    state = { items: [] };

    

    
}
 
const styles = {
    
    styleCircleFill: {
        width: 44,
        height: 44,
        borderRadius: 44/2,
        backgroundColor: '#000',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#000',
        marginLeft: 5,
        marginRight: 5
    },
    styleCircle: {
        width: 44,
        height: 44,
        borderRadius: 44/2,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#000',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Circle;
