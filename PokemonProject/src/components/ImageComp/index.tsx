import React, { Component } from "react";
import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

 const ImageComp =  ({ navigation }) => {
  
  const TelaHome = () => {
    navigation.push("Home");
  };
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.home} onPress={TelaHome}>
        <Text style={styles.title} >
                  Home 
                </Text>
                <AntDesign style={styles.icone} name="home" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.rowStyle}>
          <View style={styles.textWidth}>
            <Text style={{ fontSize: 22, textAlign: "center" }}>
              PIKACHU REGALUS
            </Text>
          </View>
          <View style={styles.imageWidth}>
            <Image
              style={styles.imagemTamanho}
              source={require('../../assets/PikaRegalus.jpg')}
              
            />
          </View>
        </View>

        <View style={styles.rowStyle}>
          <View style={styles.textWidth}>
          <Text style={{ fontSize: 22, textAlign: "center" }}>
              PIKACHU ONE PEACE
            </Text>
            <Text style={{ fontSize: 22, textAlign: "center" }}>
            </Text>
          </View>
          <View style={styles.imageWidth}>
            <Image
              style={styles.imagemTamanho}
              source={require('../../assets/pikaOnepeace.jpg')
                
              }
            />
          </View>
        </View>

        <View style={styles.rowStyle}>
          <View style={styles.textWidth}>
          <Text style={{ fontSize: 22, textAlign: "center" }}>
              PIKACHU FOFINHO
            </Text>
            <Text style={{ fontSize: 22, textAlign: "center" }}>
              
            </Text>
          </View>
          <View style={styles.imageWidth}>
            <Image
              style={styles.imagemTamanho}
              source={require('../../assets/pikafofo1.jpg')
                
              }
            />
          </View>
        </View>

        <View style={styles.rowStyle}>
          <View style={styles.textWidth}>
          <Text style={{ fontSize: 22, textAlign: "center" }}>
              PIKACHU MILO
            </Text>
          </View>
          <View style={styles.imageWidth}>
            <Image
              style={styles.imagemTamanho}
              source={require('../../assets/pikaMilo.jpg')
               }
            />
          </View>
        </View>
        <View style={styles.rowStyle}>
          <View style={styles.textWidth}>
          <Text style={{ fontSize: 22, textAlign: "center" }}>
              PIKACHU FUT
            </Text>
          </View>
          <View style={styles.imageWidth}>
            <Image
              style={styles.imagemTamanho}
              source={require('../../assets/pikaFut.jpg')
                
              }
            />
          </View>
        </View>
        <View style={styles.rowStyle}>
          <View style={styles.textWidth}>
            <Text style={{ fontSize: 22, textAlign: "center" }}>
              PIKACHU MU
              </Text>
              
          </View>
          <View style={styles.imageWidth}>
            <Image
              style={styles.imagemTamanho}
              source={require('../../assets/pikaMu.jpg')}
              
            />
          </View>
        </View>

        <View style={styles.rowStyle}>
          <View style={styles.textWidth}>
          <Text style={{ fontSize: 22, textAlign: "center" }}>
              PIKACHU ONE PEACE
            </Text>
            <Text style={{ fontSize: 22, textAlign: "center" }}>
            </Text>
          </View>
          <View style={styles.imageWidth}>
            <Image
              style={styles.imagemTamanho}
              source={require('../../assets/pikaOnepeace.jpg')
                
              }
            />
          </View>
        </View>

        <View style={styles.rowStyle}>
          <View style={styles.textWidth}>
          <Text style={{ fontSize: 22, textAlign: "center" }}>
              PIKACHU FOFINHO
            </Text>
            <Text style={{ fontSize: 22, textAlign: "center" }}>
              
            </Text>
          </View>
          <View style={styles.imageWidth}>
            <Image
              style={styles.imagemTamanho}
              source={require('../../assets/pikafofo1.jpg')
                
              }
            />
          </View>
        </View>

        <View style={styles.rowStyle}>
          <View style={styles.textWidth}>
          <Text style={{ fontSize: 22, textAlign: "center" }}>
              PIKACHU MILO
            </Text>
            <Text style={{ fontSize: 22, textAlign: "center" }}>
              
            </Text>
          </View>
          <View style={styles.imageWidth}>
            <Image
              style={styles.imagemTamanho}
              source={require('../../assets/pikaMilo.jpg')
               }
            />
          </View>
        </View>
        <View style={styles.rowStyle}>
          <View style={styles.textWidth}>
          <Text style={{ fontSize: 22, textAlign: "center" }}>
              PIKACHU FUT
            </Text>
            <Text style={{ fontSize: 22, textAlign: "center" }}>
            </Text>
          </View>
          <View style={styles.imageWidth}>
            <Image
              style={styles.imagemTamanho}
              source={require('../../assets/pikaFut.jpg')
                
              }
            />
          </View>
        </View>
      </ScrollView>
    );
  }

export default ImageComp;