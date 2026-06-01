import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import styles from '../../styles/Styles';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.welcomeContainer}>
      <ImageBackground
        source={require('../../assets/images/background-welcome.png')}
        style={styles.welcomeBackground}
        resizeMode="cover">
        <View style={styles.welcomeOverlay}>
          <Text style={styles.welcomeTitle}>
            Bob Burger
          </Text>

          <TouchableOpacity
            onPress={() => navigation.replace('MainTabs')}
            style={styles.welcomeButton}>
            <Text style={styles.welcomeButtonText}>Estou pronto!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
