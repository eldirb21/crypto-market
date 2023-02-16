import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icons from './Icons';
import Texts from './Texts';

export default function TextInputs({
  onPress,
  title,
  textColor,
  inputStyle,
  contentStyle,
  ...props
}) {
  return (
    <View style={[style.container, contentStyle]}>
      <Texts style={style.lable}>{title}</Texts>
      <TextInput
        {...props}
        style={[
          style.input,
          inputStyle,
          {
            color: textColor ? textColor : '#000',
            borderColor: textColor ? textColor : 'grey',
          },
        ]}
        placeholderTextColor={textColor ? textColor : 'grey'}
      />
      {/* <TouchableOpacity style={style.icon} onPress={onPress}>
                <Icons
                    type="Octicons"
                    name="search"
                    size={20}
                    color={textColor ? textColor : 'grey'}
                />
            </TouchableOpacity> */}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    // height: 45,

    borderRadius: 20,
    justifyContent: 'center',
  },
  lable: {
    marginBottom: 2,
    marginLeft: 5,
  },
  input: {
    borderRadius: 15,
    borderWidth: 1,

    paddingHorizontal: 15,
  },
  icon: {
    position: 'absolute',
    right: 16,
  },
});
