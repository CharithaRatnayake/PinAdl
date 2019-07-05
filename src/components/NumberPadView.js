import React, { Component } from 'react';
import { View } from 'react-native';
import { RowLayout } from './RowLayout';

class NumberPadView extends Component {

    state = { array : [[1, 2, 3], [4, 5, 6], [7, 8, 9], [-1, 0, -2]], pin : []}

    renderRowViews() {
        return this.state.array.map(item =>
            <RowLayout>
                {renderItems()}
            </RowLayout>
        );
    }

    renderItems() {
        return this.state.array.map(item =>
            if(item === -1){
                //Add empty view
            }else if(item === -2){
                //Add delete view
            }else{
                <Button onPress={() => this.state.pin.push(item))}>item</Button>
            }
        );
    }

    render() {
        return (
            <View>
                {renderRowViews()}
            </View>
        );
    }
}

export default NumberPadView;
