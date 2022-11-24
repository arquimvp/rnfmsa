import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './MainNavigator';

const Stack = createNativeStackNavigator<any>();
const AppNavigator: any = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="MainStack">
      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
