import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from "react-native-paper";

import styles from "./styles";

const Login = ({ navigation })  => {
  const [credenciais, setCredenciais] = useState({
    email: "",
    senha: "",
  });
    const Telahome = () => {
    navigation.push("Home");
  };

  return (
    <View style={styles.bgDark}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../../assets/Pokemon-2.png")}
      >
        <Image
          style={styles.logo}
          source={require("../../assets/pokemon-logo-8.png")}
        />
        <View style={{ padding: 20 }}>
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
           // blurOnSubmit="true"
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
              //onPress={() => console.log("Pressed")}
              onPress={Telahome}
            >
              Entrar
            </Button>
          </TouchableOpacity>

          <View style={styles.input2}>
            <TouchableOpacity>
              <Button
                onPress={() => console.log("Pressed")}
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
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
