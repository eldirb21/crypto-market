import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

export default function Containers({ bg, barStyle, children, style }) {
    function FocusAwareStatusBar(props) {
        const isFocused = useIsFocused();
        return isFocused ? <StatusBar {...props} /> : null;
    }
    var styled = [
        style,
        {
            flex: 1,
            backgroundColor: bg ? bg : '#DCE8EE',
        },
    ];
    return (
        <SafeAreaView style={styled}>
            {/* <FocusAwareStatusBar barStyle={barStyle} backgroundColor={bg} /> */}
            {children}
        </SafeAreaView>
    );
}