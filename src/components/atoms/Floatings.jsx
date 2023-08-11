import React, { useContext, useState } from 'react';
import {
    Alert,
    Animated,
    Image,
    PanResponder,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import Icons from './Icons';

export default function Floatings({
    customStyle,
    bacground,
    bottom,
    onPress,
    iconType,
    icon,
    color,
}) {
    const onFloating = () => {
        onPress();
        // Alert.alert('Floating action button Clicked');
    };
    return (
        <View style={styles.Container}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={onFloating}
                style={styles.btn_action}
            >
                <Icons
                    type={iconType ? iconType : 'MaterialCommunityIcons'}
                    name={icon ? icon : 'text-box-plus-outline'}
                    color="#FFF"
                    size={30}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        // position:'absolute',
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5F5F5',
    },

    btn_action: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: '#CB9607',
        borderColor: '#000000',
        borderRadius: 200 / 2,
    },

    btn_icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor: '#FFFFFF',
    },
});