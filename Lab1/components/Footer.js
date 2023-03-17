import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
           <Text>Демченко Ярослав Дмитрович; ІПЗ-19-2</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 25,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export default Footer;
