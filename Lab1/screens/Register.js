import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Register = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20}}>Register</Text>
            <View style={{alignItems: 'stretch', marginTop: 5}}>
                <Text>
                    Електронна пошта
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                />
            </View>
            <View style={{alignItems: 'stretch', marginTop: 5}}>
                <Text>
                    Пароль
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </View>
            <View style={{alignItems: 'stretch', marginTop: 5}}>
                <Text>
                    Повторіть пароль
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Repeat Password"
                    secureTextEntry={true}
                />
            </View>
            <View style={{alignItems: 'stretch', marginTop: 5}}>
                <Text>
                    Ім'я
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="FirstName"
                />
            </View>
            <View style={{alignItems: 'stretch', marginTop: 5}}>
                <Text>
                    Прізвище
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="LastName"
                />
            </View>
            <View style={{alignItems: 'stretch', marginTop: 20, width: 350}}>
                <Button title='Відправити'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    input: {
        height: 40,
        width: 350,
        borderWidth: 1,
        padding: 10,
        marginTop: 5
      }
});

export default Register;
