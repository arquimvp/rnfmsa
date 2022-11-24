import React from 'react';
import {Image, ScrollView, StyleSheet, Text} from 'react-native';
import {Container} from '../../components/Container';
import {Touchable} from '../../components/Touchable';
import {ProductInterface} from '../../types/product';

interface Props {
  products: ProductInterface[];
  onPressProduct: (product: ProductInterface) => void;
  onPressRedeemed: () => void;
  onPressNoRedeemed: () => void;
  productsType: string;
}

const ProductsScreen: React.FC<Props> = ({products, onPressProduct, onPressRedeemed, onPressNoRedeemed, productsType}) => {
  return (
    <>
      <Container style={styles.mainContainer}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.h4}>Jose Perez Joglar</Text>
        <Text style={styles.paragraph}>Cumpleaños: 18 de Octubre</Text>
      </Container>
      <ScrollView bounces={true} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scrollViewStyle}>
        <Text style={styles.movementsTitle}>Tus movimientos:</Text>
        <Container>
          {products &&
            products.map((product: ProductInterface, i) => (
              <Touchable key={i} onPress={() => onPressProduct(product)}>
                <Container row space="between" center crossCenter style={styles.productItem}>
                  <Container row middle space="between">
                    <Image source={{uri: product.image}} resizeMode="cover" style={styles.productItemImage} />
                    <Text>{product.product}</Text>
                  </Container>
                  <Container>
                    <Container flex row crossCenter center space="between">
                      <Text style={styles.productItemPrice}>{`$ ${product.price}`}</Text>
                      <Text style={styles.productItemArrow}>{'>'}</Text>
                    </Container>
                  </Container>
                </Container>
              </Touchable>
            ))}
        </Container>
      </ScrollView>
      <Container middle style={styles.leyend}>
        <Text>{`Productos: ${productsType}`}</Text>
      </Container>
      <Container row style={styles.buttonsContainer}>
        <Container width="50%" middle>
          <Touchable onPress={onPressRedeemed} width="100%">
            <Container style={styles.button} middle>
              <Text>
                {productsType === 'Canjeados' || productsType === 'Ganados (No redimidos)'
                  ? 'Todos'
                  : productsType === 'Todos'
                  ? 'Canjeados'
                  : 'Todos'}
              </Text>
            </Container>
          </Touchable>
        </Container>
        <Container width="50%" middle>
          <Touchable onPress={onPressNoRedeemed} width="100%">
            <Container style={styles.button} middle>
              <Text>
                {productsType === 'Canjeados' || productsType === 'Ganados (No redimidos)'
                  ? 'Todos'
                  : productsType === 'Todos'
                  ? 'Ganados (No redimidos)'
                  : 'Todos'}
              </Text>
            </Container>
          </Touchable>
        </Container>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    flexGrow: 1,
    paddingBottom: 32,
  },
  mainContainer: {
    paddingBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: 'lightblue',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 18,
    marginTop: 6,
  },
  paragraph: {
    fontSize: 12,
    marginTop: 6,
  },
  movementsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
    paddingHorizontal: 8,
  },
  productItem: {
    backgroundColor: '#edebeb',
    height: 48,
    marginTop: 3,
    paddingHorizontal: 8,
  },
  productItemArrow: {
    marginLeft: 16,
    marginRight: 8,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productItemImage: {
    height: 40,
    width: 40,
    marginRight: 6,
  },
  productItemPrice: {
    color: 'black',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 4,
    height: 28,
    width: '85%',
    borderRadius: 8,
    alignSelf: 'center',
  },
  leyend: {
    marginVertical: 8,
  },
  buttonsContainer: {
    marginBottom: 16,
  },
});

export default ProductsScreen;
