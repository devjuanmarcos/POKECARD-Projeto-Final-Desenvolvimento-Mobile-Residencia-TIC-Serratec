import React, { useCallback } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const Autores = ({ navigation }) => {
  const TelaHome = () => {
    navigation.push("Home");
  };

  const linkIsis = useCallback(() => {
    Linking.openURL("https://github.com/IsisReisCastro");
  }, []);
  const linkJuan = useCallback(() => {
    Linking.openURL("https://github.com/devjuanmarcos");
  }, []);
  const linkMichael = useCallback(() => {
    Linking.openURL("https://github.com/michaelfernan");
  }, []);
  const linkManuela = useCallback(() => {
    Linking.openURL("https://github.com/manuacg");
  }, []);
  const linkRaquel = useCallback(() => {
    Linking.openURL("https://github.com/RaquelAlvesBarbosa");
  }, []);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.home} onPress={TelaHome}>
        <Text style={styles.title}>Home</Text>
        <AntDesign style={styles.icone} name="home" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.rowStyle}>
        <TouchableOpacity onPress={linkIsis}>
          <View style={styles.imageWidth}>
            <Image
              style={styles.imagemTamanho}
              source={{
                uri: "https://avatars.githubusercontent.com/u/110749924?v=4",
              }}
            />
          </View>
          <View style={styles.textWidth}>
            <Text style={{ fontSize: 22, textAlign: "center" }}>
              Isis Reis Castro
            </Text>
            <Text style={{ fontSize: 12, textAlign: "center" }}>
             Residência em TIC/Software (Serratec) Full stack Developer - Tecnóloga em Logística
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.rowStyle}>
        <TouchableOpacity onPress={linkJuan}>
          <View style={styles.imageWidth}>
            <Image
              style={styles.imagemTamanho}
              source={{
                uri: "https://avatars.githubusercontent.com/u/111091371?v=4",
              }}
            />
          </View>
          <View style={styles.textWidth}>
            <Text style={{ fontSize: 22, textAlign: "center" }}>
              Juan Marcos Texe
            </Text>
            <Text style={{ fontSize: 17, textAlign: "center" }}></Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.rowStyle}>
        <TouchableOpacity onPress={linkMichael}>
          <View style={styles.imageWidth}>
            <Image
              style={styles.imagemTamanho}
              source={{
                uri: "https://avatars.githubusercontent.com/u/111091339?v=4",
              }}
            />
          </View>
          <View style={styles.textWidth}>
            <Text style={{ fontSize: 22, textAlign: "center" }}>
              Michael Fernandes
            </Text>
            <Text style={{ fontSize: 17, textAlign: "center" }}>
            Residência em TIC/Software (Serratec) Full stack Developer - Biologo
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rowStyle}>
        <TouchableOpacity onPress={linkManuela}>
          <View style={styles.imageWidth}>
            <Image
              style={styles.imagemTamanho}
              source={{
                uri: "https://i.pinimg.com/originals/a0/d1/50/a0d1504983a3e2116da8ca3caa065129.jpg",
              }}
            />
          </View>
          <View style={styles.textWidth}>
            <Text style={{ fontSize: 22, textAlign: "center" }}>
              Manuela Azeredo
            </Text>
            <Text style={{ fontSize: 17, textAlign: "center" }}>
            Residência em TIC/Software (Serratec) Full stack Developer
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rowStyle}>
        <TouchableOpacity onPress={linkRaquel}>
          <View style={styles.imageWidth}>
            <Image
              style={styles.imagemTamanho}
              source={{
                uri: "https://i.pinimg.com/736x/52/9e/6a/529e6a24ea31d4bb01cdc245cfc94e58.jpg",
              }}
            />
          </View>
          <View style={styles.textWidth}>
            <Text style={{ fontSize: 22, textAlign: "center" }}>
              Raquel Alves Barbosa
            </Text>
            <Text style={{ fontSize: 17, textAlign: "center" }}></Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Autores;
