import { StyleSheet, View } from 'react-native';
import Product from '../components/Product'

const Products = () => {
    return (
        <View style={styles.container}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});

export default Products;
