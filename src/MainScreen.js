import React, { Component } from 'react';
import { View, Image, TextInput } from 'react-native';
import { CommonText } from './components/common/CommonText';
import { Button } from './components/common/Button';

class MainScreen extends Component {

    render() {
        return (
            <View>
                <CommonText textContent={'You are enter to the system'} />
            </View>
        );
    }
}

export default MainScreen;
