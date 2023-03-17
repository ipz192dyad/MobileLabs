import { StyleSheet, View } from 'react-native';
import Picture from '../components/Picture'

const Pictures = () => {
    return (
        <View style={styles.container}>
            <Picture/>
            <Picture/>
            <Picture/>
            <Picture/>
            <Picture/>
            <Picture/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});

export default Pictures;
