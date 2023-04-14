import { StyleSheet, View, Image } from 'react-native';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  

const Picture = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginRight: 5 }}>
                <Image style={{ height: 100, width: 100 }} source={{uri: `https://github.com/ipz192dyad/MobileLabs/blob/master/pictures/${getRandomIntInclusive(1, 10)}.jpg?raw=true`}} />
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginLeft: 5 }}>
                <Image style={{ height: 100, width: 100 }} source={{uri: `https://github.com/ipz192dyad/MobileLabs/blob/master/pictures/${getRandomIntInclusive(1, 10)}.jpg?raw=true`}} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 110,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5
    },
});

export default Picture;
