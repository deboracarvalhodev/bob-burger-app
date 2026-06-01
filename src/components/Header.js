import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../styles/Styles';

export default function Header() {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.leftContainerHeader}>
        <Image
          source={require('../assets/images/logo-bob-burger.png')}
          style={styles.logoHeader}
        />
        <Text style={styles.titleHeader}>Bob Burger</Text>
      </View>

      <TouchableOpacity
        style={styles.cartBtnHeader}
        onPress={() => Alert.alert('Carrinho', 'Seu carrinho está vazio!')}>
        <Ionicons name="basket" size={26} color="#222" />
      </TouchableOpacity>
    </View>
  );
}
