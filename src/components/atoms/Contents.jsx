import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {colors} from '../../constants/themes';

export default function Contents({
  background,
  isScroll,
  contentStyle,
  ...props
}) {
  var styled = [
    contentStyle,
    {
      flex: 1,
      display: 'flex',
      backgroundColor: background ? background : colors.body,
      paddingBottom: 4,
    },
  ];
  return isScroll ? (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
      {...props}>
      <View style={styled}>{props.children}</View>
    </ScrollView>
  ) : (
    <SafeAreaView style={styled} {...props}>
      {props.children}
    </SafeAreaView>
  );
}
