import React from 'react';
import {MainStackParams} from '../../types/main-stack-params';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeArea} from '../../components/SafeArea';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProductDetailScreen from './ProductDetailScreen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const ProductDetailController: React.FC<any> = ({route}: NativeStackScreenProps<MainStackParams, 'productDetail'>) => {
  const {goBack} = useNavigation<NativeStackNavigationProp<MainStackParams>>();

  return (
    <SafeArea
      barStyle="dark"
      topSafeArea={true}
      safeBGColor="white"
      bottomBGColor="white"
      backgroundColor="white"
      childrenContainerStyle={styles.safeArea}>
      <ProductDetailScreen onPressGoBack={goBack} product={route.params.product} />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    paddingHorizontal: 0,
  },
});

export default ProductDetailController;
