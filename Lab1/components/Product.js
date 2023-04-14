import { StyleSheet, Text, View, Image } from 'react-native';

const Product = (props) => {
    const {item} = props
    const {id, title, description, Date} = item

    return (
        <View style={styles.container}>
            <View style={{ flex: 2, justifyContent: 'center' }}>
                <Image style={{ height: 50, width: 50, marginLeft: 20 }} source={{uri: `https://github.com/ipz192dyad/MobileLabs/blob/master/pictures/${id}.jpg?raw=true`}} />
            </View>
            <View style={{ flex: 6, justifyContent: 'center' }}>
                <View style={{flexDirection: 'column'}}>
                    <Text style={{fontSize: 20}}>{title.length > 20 ? title.slice(0, 19) + '...' : title}</Text>
                    <Text style={{color: 'gray'}}>{Date}</Text>
                    <Text>{description.length > 40 ? description.slice(0, 39) + '...' : description}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        marginTop: 10
    },
});

export default Product;
