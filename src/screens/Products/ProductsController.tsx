import React, {useEffect, useState} from 'react';
import {MainStackParams} from '../../types/main-stack-params';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProductInterface} from '../../types/product';
import {productsServices} from '../../services/products.services';
import {SafeArea} from '../../components/SafeArea';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProductsScreen from './ProductsScreen';

const ProductsController: React.FC = () => {
  const {navigate} = useNavigation<NativeStackNavigationProp<MainStackParams>>();

  const [allProducts, setAllProducts] = useState<ProductInterface[]>();
  const [redeemedProducts, setRedeemedProducts] = useState<ProductInterface[]>();
  const [noRedeemedProducts, setNoRedeemedProducts] = useState<ProductInterface[]>();
  const [visibleProducts, setVisibleProducts] = useState<ProductInterface[]>();
  const [productsType, setProductsType] = useState('');
  const [toggle, setToggle] = useState(true);

  const fetchProducts = async () => {
    const productsResponse: ProductInterface[] = await productsServices.getProducts();
    setAllProducts(productsResponse);
    setRedeemedProducts(productsResponse.filter(p => p.is_redemption));
    setNoRedeemedProducts(productsResponse.filter(p => !p.is_redemption));
    setVisibleProducts(productsResponse);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onPressProduct = (product: ProductInterface) => {
    navigate('productDetail', {product});
  };

  const onPressRedeemed = () => {
    setToggle(toggled => {
      return !toggled;
    });

    if (toggle) {
      setProductsType('Todos');
      setVisibleProducts(allProducts);
    } else {
      setProductsType('Canjeados');
      setVisibleProducts(redeemedProducts);
    }
  };

  const onPressNoRedeemed = () => {
    setToggle(toggled => {
      return !toggled;
    });

    if (toggle) {
      setProductsType('Todos');
      setVisibleProducts(allProducts);
    } else {
      setProductsType('Ganados (No redimidos)');
      setVisibleProducts(noRedeemedProducts);
    }
  };

  return (
    <SafeArea
      barStyle="dark"
      topSafeArea={true}
      safeBGColor="white"
      topBGColor="lightblue"
      bottomBGColor="white"
      backgroundColor="white"
      childrenContainerStyle={styles.safeArea}>
      <ProductsScreen
        products={visibleProducts!}
        onPressProduct={onPressProduct}
        onPressRedeemed={onPressRedeemed}
        onPressNoRedeemed={onPressNoRedeemed}
        productsType={productsType}
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    paddingHorizontal: 0,
  },
});

export default ProductsController;
