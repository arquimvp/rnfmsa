import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParams} from '../types/main-stack-params';
import ProductsController from '../screens/Products/ProductsController';
import ProductDetailController from '../screens/ProductDetail/ProductDetailController';

const MainStack: React.FC = () => {
  const Stack = createNativeStackNavigator<MainStackParams>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      id="MainStack"
      initialRouteName="products">
      <Stack.Screen name="products" component={ProductsController} />
      <Stack.Screen options={{headerBackTitleVisible: true}} name="productDetail" component={ProductDetailController} />
    </Stack.Navigator>
  );
};

export default MainStack;
