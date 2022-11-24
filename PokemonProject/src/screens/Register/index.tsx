import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Button } from "react-native-paper";

import styles from "./styles";

const Register = ({ navigation }) => {

  const TelaLogin = () => {
    navigation.push("Login");
  };
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastro = () => {
    // alert(nome);
    // alert(email);
    // alert(senha);
    //fazer chamada no back-end para cadastro.
  };

  return (
    <View>
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
        }}
        source={require("../../assets/pokemonblu2.png")}
      >
        <View style={styles.container}>
          <Animatable.Image
            animation="pulse"
            iterationCount="infinite"
            direction="alternate"
            style={styles.logo}
            source={require("../../assets/pokemon-logo-8.png")}
          />

          <Animatable.View style={{ padding: 20 }} animation={zoomOut}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 17,
                marginBottom: 30,
              }}
            >
              Cadastre-se para ter acesso a todas as novidades
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Digite seu nome"
              onChangeText={(text) => setNome(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Digite seu email"
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              secureTextEntry
              style={styles.textInput}
              placeholder="Digite sua senha"
              onChangeText={(text) => setSenha(text)}
            />

            <TouchableOpacity onPress={() => cadastro()} style={styles.buttom}>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 17,
                }}
              >
                Cadastrar
              </Text>
            </TouchableOpacity>
          </Animatable.View>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 17,
              marginBottom: 10,
            }}
          >
            Já tem uma conta?
          </Text>
          <TouchableOpacity onPress={TelaLogin}>
            <Button
              
              theme={{ colors: { primary: "#fff" } }}
            >
              Fazer Login
            </Button>
          </TouchableOpacity>
        </View>

        <Text style={styles.textSmall}>
          {" "}
          O acesso está protegido pelo Google reCAPTCHA para garantir que você
          não é um robô. Saiba mais.
        </Text>
      </ImageBackground>
    </View>
  );
};
const zoomOut = {
  0: {
    opacity: 0,
    scale: 0,
  },
  0.5: {
    opacity: 1,
    scale: 0.3,
  },
  1: {
    opacity: 1,
    scale: 1,
  },
};

export default Register;
