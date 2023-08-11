import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {dataStack} from './nav-data';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {dataStack.map((x, i) => (
        <Stack.Screen key={i} name={x.name} component={x.component} />
      ))}
    </Stack.Navigator>
  );
};

export default StackNav;
