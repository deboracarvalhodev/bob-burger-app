import React, { useState } from 'react';
import { View, Text, FlatList, StatusBar, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';

import Header from '../../components/Header';
import CardProduto from '../../components/CardProduto';
import { produtos } from '../../data/Produtos';

import styles from '../../styles/Styles';

export default function BebidasScreen() {
  const [search, setSearch] = useState('');
  const [favoritos, setFavoritos] = useState([]);

  const bebidas = produtos.filter((item) => item.categoria === 'bebida');

  const filtrados = bebidas.filter((item) =>
    item.nome.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorito = (id) => {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((item) => item !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#222" />
      <Header />

      <View style={styles.content}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Bebidas</Text>
          <Image
            source={require('../../assets/icons/icon-refrigerante.png')}
            style={styles.imgTitle}
            resizeMode="contain"
          />
        </View>

        <Searchbar
          placeholder="Buscar bebida..."
          onChangeText={setSearch}
          value={search}
          style={styles.searchBar}
          inputStyle={styles.searchInput}
        />

        <FlatList
          data={filtrados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardProduto
              item={item}
              favorito={favoritos.includes(item.id)}
              onFavorite={toggleFavorito}
              onAdd={(item) => console.log('add:', item)}
            />
          )}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 120,
          }}
          ListEmptyComponent={
            <View style={styles.containerNotFound}>
              <Image
                source={require('../../assets/images/bob-esponja-nao-encontrado.jpg')}
                style={styles.imgNotFound}
              />
              <Text style={styles.textNotFound}>
                Ops! Nenhuma bebida foi encontrada.
              </Text>
            </View>
          }
        />
      </View>
    </View>
  );
}
