// Import libraries for making a component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Circle from './common/Circle';

//Make a component
class PasswordView extends Component {

    state = { items: [] };

    componentWillMount() {
        
    }

    renderItems() {
        return this.state.items.map(item => 
            <Circle isActive={item} />
        );
    }

    render() {
        
        console.log(this.state);
        
        return (
            <View>
                {/* {this.renderItems()} */}
            </View>
        );
    }
}

//Make the component available to other parts
export default PasswordView;
