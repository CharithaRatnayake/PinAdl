import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CommonText } from "./components/common/CommonText";
import { PasswordView } from "./components/PasswordView";
import { NumberPadView } from "./components/NumberPadView";
import { Button } from "./components/common/Button";
import { ErrorText } from "./components/common/ErrorText";

class PinScreen extends Component {
    //This need to be get from internal storage by decrypted, where it should be save as encrypted
    PIN_CODE = 7890;
    this.state = { pin : [], isCircleActive = [false, false, false, false], attempts: 0, errorText : '' }
    const {navigate} = this.props.navigation;

    renderPasswordView(){

        //Check how many pin numbers were typed
        index = 0;
        this.state.pin.map(item =>
            this.state.isCircleActive[index] = true;
                index++;
            );

        return <PasswordView circleCount={this.state.isCircleActive}/>
    }

    //Validate the password and check it is correct or not
    processPassword(){
        if(this.state.pin.length == 4){
            //Show block message
            if(this.state.attempts == 3){
                this.state.errorText = 'PIN incorrect. Next incorrect attempt will block you.'
            }else if(this.state.attempts > 3){
                //Show block screen
            }

            //validate password
            validatePassword(pin);

            //Empty previous password
            this.state = { pin : [] }
        }
    }

    validatePassword(pin){
        //Check the password is equal
        if(elements.join() === 7890){
            openMainLayout();
        }else{
            atempts++;
            this.state.errorText = 'PIN incorrect.'
        }
    }

    //If the password is valid user should be redirect to main screen
    openMainLayout(pin){
        navigate.MainScreen();
    }

    //If the user click on reset password he should be navigate to M
    openResetPasswordLayout(pin){
        navigate.ResetPinScreen();
    }

    render() {
        return (
            <View>
                <CommonText textContent={'Enter pin to unlock'} />
                {this.renderPasswordView()}
                <ErrorText textContent={'Pin Incorrect'}/>
                <NumberPadView onPress={() => this.processPassword()}/>
                <CommonText>Forgot Pin?</Button>
                <Button onPress={() => this.openResetPasswordLayout()}>Tap here to reset</Button>
            </View>
        );
    }
}

export default PinScreen;
