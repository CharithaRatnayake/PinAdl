import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CommonText } from "./components/common/CommonText";
import { PasswordView } from "./components/PasswordView";
import { NumberPadView } from "./components/NumberPadView";
import { Button } from "./components/common/Button";
import { ErrorText } from "./components/common/ErrorText";

class PinScreen extends Component {
    render() {
        return (
            <View>
                {/* <CommonText textContent={'Enter pin to unlock'} /> */}
                <PasswordView />
                {/* <Text>Test</Text> */}
                {/* <ErrorText /> */}
                {/* <NumberPadView /> */}
                {/* <Button /> */}
                {/* <Button /> */}
            </View>
        );
    }
}

export default PinScreen;
