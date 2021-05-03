import React, { Component } from 'react';
import { View, Text, Image} from 'react-native'
import {Header} from 'react-native-elements'

export default class MyHeader extends Component {
    render(){
        return(
            <View>
                <Header
                leftComponent={<Image source={require('../assets/icon.png')}/>}
                centerComponent={{text: this.props.text}} 
                backgroundColor={'skyblue'}
                />
            </View>
        );
    }
}