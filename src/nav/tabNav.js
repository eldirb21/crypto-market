import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {dataTab} from './nav-data';
import Icons from '../components/atoms/Icons';
const Tab = createBottomTabNavigator();

const {width, height} = Dimensions.get('window');
function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={[
        {flexDirection: 'row', backgroundColor: '#FFF'},
        {
          shadowRadius: 2,
          shadowOffset: {
            width: 0,
            height: -12,
          },
          shadowColor: '#000000',
          elevation: 10,
        },
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        var iconName = '';
        switch (label) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Market':
            iconName = 'equalizer';
            break;
          case 'Assets':
            iconName = 'account-balance-wallet';
            break;
          case 'Mine':
            iconName = 'folder-shared';
            break;
          default:
            iconName = 'folder-shared';
            break;
        }
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              {
                flex: 1,
                width: width / 4,
                backgroundColor: '#FFF',
                alignItems: 'center',
                padding: 3,
              },
            ]}>
            <Icons
              name={iconName}
              size={22}
              color={isFocused ? '#673ab7' : '#222'}
            />
            <Text
              style={{color: isFocused ? '#673ab7' : '#222', marginTop: -6}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      {dataTab.map((x, i) => (
        <Tab.Screen key={i} name={x.name} component={x.component} />
      ))}
    </Tab.Navigator>
  );
};

export default TabNav;
