import React from "react";

import { FlatList, TouchableOpacity, View, Image } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

import styles from './styles';

const Arrays = () => {
    return (
        <FlatList
            horizontal
            style={styles.flatListContainer}
            data={[1, 2, 3, 4, 5, 6, 7]}
            renderItem={(item, index) => (
                <TouchableOpacity key={index}
                    style={{ marginLeft: index === 1 ? 20 : 0 marginLeft: 10 }}>
                    <View style={styles.oval}>
                        <Image style={styles.capa} source={{ uri: 'https://i.imgur.com/EJyDFeY.jpg' }} />

                        <Image
                            resizeMode="contain"
                            style={styles.logo}
                            source={{ uri: 'https://i.imgur.com/4xN7wB8.png' }} />

                        <LinearGradient style={styles.gradient} colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />

                    </View>
                </TouchableOpacity>
            )}
        />)
}

export default Arrays;