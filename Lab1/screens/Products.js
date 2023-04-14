import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Product from '../components/Product'
import { useState, useEffect } from 'react';

const Products = () => {
    const dataURL = 'https://raw.githubusercontent.com/ipz192dyad/MobileLabs/master/news.json'
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(dataURL)
            .then((response) => response.json())
            .then((responseJson) => setData(responseJson))
            .catch((error) => {
                console.error(error)
            });
    }, [dataURL]);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {data.map(item => <Product key={item.id} item={item}/>)}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});

export default Products;
