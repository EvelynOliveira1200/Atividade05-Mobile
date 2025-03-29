import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require("../img/fundopreto.png")} style={styles.imagemfundo}>
            <View style={styles.container}>
                
                <Image source={require("../img/logoimg.png")} style={styles.logo} />
                <Text style={styles.titulo}>Welcome</Text>
                <Text style={styles.text}>Sign up for a secure and easy experience!</Text>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("SignIn")}>
                    <Text style={styles.textobotao}>Sign In</Text>
                </TouchableOpacity>
                
            </View>
            </ImageBackground>
        
)}


const styles = StyleSheet.create({
    imagemfundo: {
        flex: 1,
        resizeMode: 'cover',
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 250,
        height: 250,
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },

    text: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 20,
    },

    botao: {
        width: '80%',
        backgroundColor: '#444444',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },

    textobotao: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
})

export default HomeScreen;