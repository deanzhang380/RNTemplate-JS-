import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { configTitle } from '../../config/settings'
import Sizes from '../../res/values/function/src/Sizes';
export default class NewFeedComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      
        return (
            <View style={styles.body}>
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.text}>Màn hình New Feed</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        // backgroundColor: 'white',
        justifyContent: 'center',
        // paddingHorizontal: Sizes.s10
        // alignItems: 'center'
    },
    // item: {
    //     borderTopColor: 'grey',
    //     borderBottomColor: 'red'
    // },
    touch: {
        // width: '80%',
        alignSelf: 'center',
        paddingVertical: 20,
        // backgroundColor: '#335272',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: configTitle.sizes,
        fontWeight: configTitle.weight,
        color: configTitle.color
    }
})