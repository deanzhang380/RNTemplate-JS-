import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { requireImage } from '../../res/values/strings/requireImage'
import Sizes from '../../res/values/function/src/Sizes'
import { configColor } from '../../config/settings'
export default class CustomBottomTabBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        // const { colorApp } = this.state
        const { navigation } = this.props
        const { state } = navigation

        return (
            <SafeAreaView style={styles.body}>
                <View style={styles.content}>
                    {
                        state.routes.map((route, index) => {
                            let isFocused = state.index === index
                            const onPress = () => {
                                if (route.routeName === route.key) {
                                    navigation.navigate(route.key)
                                }
                            }
                            switch (route.key) {
                                case 'NewFeedContainer':
                                    return (
                                        <TouchableOpacity key={route.key} onPress={onPress} style={styles.touchTab}>
                                            <Image
                                                source={requireImage.ic_tab_newfeed}
                                                style={{ width: Sizes.h40, height: Sizes.h40 }}
                                                tintColor={isFocused ? configColor.select : configColor.noSelect}
                                            />
                                            <Text numberOfLines={1} style={[styles.textTab, { color: isFocused ? configColor.select : configColor.noSelect }]}>New feed</Text>
                                        </TouchableOpacity>
                                    )

                                case 'DashboardContainer':
                                    return (
                                        <TouchableOpacity key={route.key} onPress={onPress} style={styles.touchTab}>
                                            <Image
                                                source={requireImage.ic_tab_dashboard}
                                                style={{ width: Sizes.h40, height: Sizes.h40 }}
                                                tintColor={isFocused ? configColor.select : configColor.noSelect}
                                            />
                                            <Text numberOfLines={1} style={[styles.textTab, { color: isFocused ? configColor.select : configColor.noSelect }]}>Dashboard</Text>

                                        </TouchableOpacity>
                                    )
                                case 'CustomerContainer':
                                    return (
                                        <TouchableOpacity key={route.key} onPress={onPress} style={styles.touchTab}>
                                            <Image
                                                source={requireImage.ic_tab_customer}
                                                style={{ width: Sizes.h40, height: Sizes.h40 }}
                                                tintColor={isFocused ? configColor.select : configColor.noSelect}
                                            />
                                            <Text numberOfLines={1} style={[styles.textTab, { color: isFocused ? configColor.select : configColor.noSelect }]}>Khách hàng</Text>
                                        </TouchableOpacity>
                                    )
                                case 'ChanceContainer':
                                    return (
                                        <TouchableOpacity key={route.key} onPress={onPress} style={styles.touchTab}>
                                            <Image
                                                source={requireImage.ic_tab_chance}
                                                style={{ width: Sizes.h40, height: Sizes.h40 }}
                                                tintColor={isFocused ? configColor.select : configColor.noSelect}
                                            />
                                            <Text numberOfLines={1} style={[styles.textTab, { color: isFocused ? configColor.select : configColor.noSelect }]}>Cơ hội</Text>

                                        </TouchableOpacity>
                                    )
                                case 'MenuContainer':
                                    return (
                                        <TouchableOpacity   key={route.key} onPress={onPress} style={styles.touchTab}>
                                            <Image
                                                source={requireImage.ic_tab_menu}
                                                style={{ width: Sizes.h40, height: Sizes.h40 }}
                                                tintColor={isFocused ? configColor.select : configColor.noSelect}
                                            />
                                            <Text numberOfLines={1} style={[styles.textTab, { color: isFocused ? configColor.select : configColor.noSelect }]}>Menu</Text>

                                        </TouchableOpacity>
                                    )
                                default:
                                    return null
                            }
                        })
                    }

                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        backgroundColor: 'white',
    },
    content: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white',
        // paddingVertical: 15,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: 'silver',
        paddingTop: Sizes.s30,
        paddingBottom: Sizes.s60,
    },
    touchTab: {
        paddingVertical: Sizes.s20,
        paddingHorizontal: Sizes.s20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    textTab: {
        fontSize: Sizes.h18,
        fontWeight: '700',
        marginVertical: Sizes.s5
    }
})  