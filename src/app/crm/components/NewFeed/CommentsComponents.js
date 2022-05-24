import React, { Component } from 'react'
import { Image, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Sizes from '../../res/values/function/src/Sizes';
import { colors } from '../../res/values/styles/themes/baseTheme'
class CommentsComponents extends Component {
    render() {
        return (
            <View style={styles.container}>
              
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,

    },
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    title: {
        fontSize: 14,
        fontStyle: "italic",
        fontWeight: "bold"
    },

    user: {
        color: colors.blue,
        textDecorationLine: "underline"
    },
    item: {
        paddingVertical: Sizes.s20,
        flexDirection: 'row',
        borderTopWidth: 0.5,
        marginBottom: Sizes.s10,
    },
    item2: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomWidth: 0.25,
        paddingVertical: Sizes.s20,
    },
    chat: {
        flex: 1,
        backgroundColor: colors.gray2
    },
    itemcomments: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: Sizes.s15,

    },
    comments: {
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: Sizes.s20,

    },
    searchSection: {
        flex: 1,

        backgroundColor: '#fff',
    },
    input: {
        // flex: 1,
        // padding: Sizes.s10,
        backgroundColor: '#fff',
        // color: '#424242',
        // borderRadius: Sizes.s20
    },
    textInput: {
        height: Sizes.s90,
        // marginHorizontal: Sizes.s30,

        borderRadius: Sizes.s15,
        borderWidth: Sizes.s2,
        borderColor: '#dbe5ee',
        backgroundColor: colors.white,
    }
});
export default CommentsComponents;
