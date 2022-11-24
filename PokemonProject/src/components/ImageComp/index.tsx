import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

export default class ImageComp extends Component {
 

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowStyle}>
          <View style={styles.textWidth}>
            <Text style={{ fontSize: 22, textAlign: "center" }}>
              Pikachu Fofinho
            </Text>
          </View>
          <View style={styles.imageWidth}>
            <Image
              style={styles.imagemTamanho}
              source={require('../../assets/pikaRegalus.jpg')}
            />
          </View>
        </View>

        <View style={styles.rowStyle}>
          <View style={styles.textWidth}>
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
      </View>
    );
  }
}
