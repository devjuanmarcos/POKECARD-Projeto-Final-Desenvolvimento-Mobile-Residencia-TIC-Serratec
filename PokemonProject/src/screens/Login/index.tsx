import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import styles from "./styles";
import Register from "../Register";

const Login = ({ navigation })  => {
  const [credenciais, setCredenciais] = useState({
    email: "",
    senha: "",
  });
    const TelaHome = () => {
    navigation.push("Home");
  };
  const TelaRegister = () => {
    navigation.push("Register");
  };

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Routes" }],
    });
  };

  return (
    <View style={styles.bgDark}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../../assets/Pokemon-2.png")}
      >
        <Animatable.Image
          animation="pulse"
          iterationCount="infinite"
          direction="alternate"
          style={styles.logo}
          source={require("../../assets/pokemon-logo-8.png")}
        />
        <Animatable.View style={{ padding: 20 }} animation={zoomOut}>
          <TextInput
            mode="flat"
            label="Email ou número de telefone"
            style={styles.input}
            value={credenciais.email}
            onChangeText={(text) =>
              setCredenciais({ ...credenciais, email: text })
            }
          />

          <TextInput
            label="Senha"
            mode="flat"
            style={styles.input}
            secureTextEntry
            value={credenciais.senha}
            onChangeText={(text) =>
              setCredenciais({ ...credenciais, senha: text })
            }
          />

          <TouchableOpacity>
            <Button
              mode="text"
              style={styles.input}
              textColor="#fff"
             // onPress={() => console.log("Pressed")}
             onPress={TelaHome}
            >
              Entrar
            </Button>
          </TouchableOpacity>

          <View style={styles.input2}>
            <TouchableOpacity>
              <Button
                onPress={TelaRegister}
                theme={{ colors: { primary: "#fff" } }}
              >
                Cadastrar-se
              </Button>
            </TouchableOpacity>

            <TouchableOpacity>
              <Button
                onPress={() => console.log("Pressed")}
                theme={{ colors: { primary: "#fff" } }}
              >
                Recuperar senha
              </Button>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={styles.textSmall}>
              {" "}
              O acesso está protegido pelo Google reCAPTCHA para garantir que
              você não é um robô. Saiba mais.
            </Text>
          </TouchableOpacity>
        </Animatable.View>
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

export default Login;
