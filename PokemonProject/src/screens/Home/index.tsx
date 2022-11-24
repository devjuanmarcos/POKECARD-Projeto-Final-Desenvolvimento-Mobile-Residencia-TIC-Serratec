import { Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import React, { useEffect, useState } from "react";
import { Botao } from '../../components/BotaoProps';
import styles from './styles';

export const Home = ({navigation}) =>{

  const [saudacoes, setSaudacoes] = useState<string>("");


  useEffect(() => {
      const horaAtual = new Date().getHours();
      if (horaAtual < 12) {
          setSaudacoes("Bom dia!")
      } else if (horaAtual >= 12 && horaAtual < 18) {
          setSaudacoes("Boa tarde!")
      } else {
          setSaudacoes("Boa noite!")
      }
  }, []);
  
 
  
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBackground}
      source={require('../../assets/fundoHome.png')}>
      
        <View style={styles.header}>
          <Image style={styles.image}
            source={require('../../assets/logoPocke.png')}/>
            <Text style={styles.title}>
                    {saudacoes} Pronto para aventura?
            </Text>
        
        </View>
        <View style={styles.headerButton}  >
          
          <View style={styles.boxButton}>
            <Image style={styles.imageBox}
              source={require('../../assets/pikaEvol.jpg')}/>
              <Botao style={styles.button}
                title='PACK PIKACHU'
              >
                
              <Text style={styles.textoDescricao}>
                As mais fofas imagens fofinhas do Pikachu.
              </Text>
              </Botao>
          </View>
          <View style={styles.boxButton}>
          <Image style={styles.imageBox}
            source={require('../../assets/PikaDeboa.jpg')}/>
            <Botao style={styles.button}
              title="CARTAS POKEMON"
            ></Botao>
          </View>
        </View> 
       </ImageBackground> 
       
    </View>
  );
}