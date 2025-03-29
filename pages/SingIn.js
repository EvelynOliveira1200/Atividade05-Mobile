import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';


const SignInScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require("../img/fundopreto.png")} style={styles.imagemfundo}>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome Le Rêve Sucré</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#747474"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#747474"
                />
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imagemfundo: {
        flex: 1,
        resizeMode: 'cover',
    },
    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 20,
    },
    input: {
        width: '90%',
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#E0D6CC',
    },
    button: {
        width: '90%',
        backgroundColor: '#747474',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SignInScreen;