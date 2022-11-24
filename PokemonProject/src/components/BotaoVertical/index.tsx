import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const ButtonVertical = ({icon, text}) => {
    return (
        <TouchableOpacity style={styles.button}>
        <Icon name={icon} color="#fff" size={30} />
        <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

export default ButtonVertical;
