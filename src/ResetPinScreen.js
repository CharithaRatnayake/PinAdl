import React, { Component } from 'react';
import { View, Image, TextInput } from 'react-native';
import { CommonText } from './components/common/CommonText';
import { Button } from './components/common/Button';

class ResetPinScreen extends Component {

    componentWillMount() {
        this.state = { pin : '' };
    }

    render() {
        return (
            <View>
                <View>
                <CommonText textContent={'Reset your pin'} />
                <View style={styles.horizontalView}>
                    <CommonText textContent={'Login Pin'} />
                    <Image source={{uri: 'sample_icon_source'}} style={{width: 40, height: 40}} />
                </View>
                <TextInput style={{height: 40}}
                    placeholder="Enter PIN here"
                    onChangeText={(pin) => this.setState({pin})}/>
                <Button onPress={() => this.openResetPasswordLayout()}>Reset Pin</Button>
                </View>
            </View>
        );
    }
}


 
const styles = {
    horizontalView: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        marginLeft: 5,
        marginRight: 5,
        padding: 10,
        alignItems: 'center'
    }
};

export default ResetPinScreen;
