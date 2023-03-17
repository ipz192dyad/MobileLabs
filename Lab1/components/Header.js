import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' , marginTop: 50}}>
                <View style={{ flex: 5, alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 10 }}>
                    <Image source={require('../assets/logo.png')} style={{ width: 50, height: 50 }} />
                </View>
                <View style={{ flex: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{fontSize: 20}}>Vinyl Records</Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 110,
        backgroundColor: 'white',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});

export default Header;
