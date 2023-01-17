import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Icons from './Icons';

export default function Searchbar({ onClose, onSearch, searchValue, textColor, containerStyle, ...props }) {
    return (
        <View
            style={[containerStyle, style.container]}>
            <View style={style.iconLeft}  >
                <Icons name="search" size={20} color={textColor ? textColor : 'rgba(0,0,0,.2)'} />
            </View>
            <TextInput
                {...props}
                style={style.input}
                placeholderTextColor={textColor ? textColor : 'grey'}
                placeholder="Search"
                value={searchValue}
                onChangeText={onSearch}
            />
            {searchValue &&
                <TouchableOpacity style={style.iconRight} onPress={onClose}>
                    <Icons name="close" size={20} color={textColor ? textColor : 'grey'} />
                </TouchableOpacity>
            }
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 16,
        borderColor: 'rgba(0,0,0,.2)'
    },
    input: {
        flex: 1,
        padding: 3,
        paddingHorizontal: 6
    },
    iconLeft: {
        paddingHorizontal: 6
    },
    iconRight: {
        paddingHorizontal: 6
    }
});