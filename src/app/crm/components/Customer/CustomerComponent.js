import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { configTitle } from '../../config/settings'
export default class CustomerComponent extends React.Component {
    render() {
        return (
            <View style={styles.body}>
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.text}>Màn hình khách hàng</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    touch: {
        width: '80%',
        alignSelf: 'center',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: configTitle.sizes,
        fontWeight: configTitle.weight,
        color: configTitle.color
    }
})