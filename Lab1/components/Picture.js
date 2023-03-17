import { StyleSheet, View, Image } from 'react-native';

const Picture = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginRight: 5 }}>
                <Image style={{ height: 100, width: 100 }} source={require('../assets/logo.png')} />
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginLeft: 5 }}>
                <Image style={{ height: 100, width: 100 }} source={require('../assets/logo.png')} />
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
