import React from 'react';
import {Image, ScrollView, StyleSheet, Text} from 'react-native';
import {Container} from '../../components/Container';
import {Touchable} from '../../components/Touchable';
import {ProductInterface} from '../../types/product';

interface Props {
  onPressGoBack: () => void;
  product: ProductInterface;
}

const ProductDetailScreen: React.FC<Props> = ({onPressGoBack, product}) => {
  return (
    <>
      <ScrollView bounces={false} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scrollViewStyle}>
        <Text style={styles.detailTitle}>{`Compra: ${product.product}`}</Text>
        <Container flex middle style={styles.mainContainer}>
          <Image source={{uri: product.image}} resizeMode="cover" style={styles.productItemImage} />
          <Text style={styles.detailTitle}>Ganaste</Text>
          <Text style={styles.detailTitle}>{`$ ${product.price}`}</Text>
        </Container>
      </ScrollView>
      <Container middle style={styles.buttonsContainer}>
        <Touchable onPress={onPressGoBack} width="85%">
          <Container style={styles.button} middle>
            <Text>Regresar</Text>
          </Container>
        </Touchable>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  mainContainer: {
    backgroundColor: 'lightblue',
    borderRadius: 24,
    margin: 16,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  productItemImage: {
    height: '70%',
    width: '90%',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 4,
    height: 28,
    width: '85%',
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonsContainer: {
    marginBottom: 16,
  },
});

export default ProductDetailScreen;
