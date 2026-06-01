import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/Styles';

export default function CardProduto({ favorito, item, onFavorite, onAdd }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardImageContainer}>
        <Image source={{ uri: item.imagem }} style={styles.cardImage} />

        <TouchableOpacity
          style={styles.cardHeartBtn}
          onPress={() => onFavorite(item.id)}>
          <Ionicons
            name={favorito ? 'heart' : 'heart-outline'}
            size={20}
            color={favorito ? '#FE81D4' : '#FFF'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {item.nome}
        </Text>

        <View style={styles.cardRatingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.cardRating}>{item.avaliacao}/5</Text>
        </View>

        <View style={styles.cardBottomRow}>
          <Text style={styles.cardPrice}>R$ {item.preco}</Text>

          <TouchableOpacity
            style={styles.cardCartBtn}
            onPress={() => onAdd(item)}>
            <Ionicons name="basket" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
