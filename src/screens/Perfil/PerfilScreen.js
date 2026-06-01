import React from 'react';
import { View, Text, Image, ImageBackground, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Header from '../../components/Header';
import styles from '../../styles/Styles';

export default function PerfilScreen() {
  return (
    <ImageBackground
      source={require('../../assets/images/background-home.png')}
      style={styles.container}
      resizeMode="cover">

      <View style={styles.content}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <View style={styles.profileCard}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.profileImage}
          />

          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Ionicons name="person" size={18} color="#FFF" />
            </View>
            <Text style={styles.infoText}>Débora Carvalho</Text>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Ionicons name="mail" size={18} color="#FFF" />
            </View>
            <Text style={styles.infoText}>debora.carvalho@email.com</Text>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Ionicons name="location" size={18} color="#FFF" />
            </View>
            <Text style={styles.infoText}>Rua das Flores Rosas, nº 254</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
