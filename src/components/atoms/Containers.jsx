import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

export default function Containers({
  bg,
  barStyle,
  children,
  isScroll = false,
  style,
  ...props
}) {
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
  return isScroll ? (
    <ScrollView {...props}>
      <View style={styled}>{children}</View>
    </ScrollView>
  ) : (
    <SafeAreaView style={styled}>
      {/* <FocusAwareStatusBar barStyle={barStyle} backgroundColor={bg} /> */}
      {children}
    </SafeAreaView>
  );
}
