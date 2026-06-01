import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import { Ionicons } from '@expo/vector-icons';

import { useFonts } from 'expo-font';
import { Fredoka_600SemiBold } from '@expo-google-fonts/fredoka';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

import WelcomeScreen from './src/screens/Welcome/WelcomeScreen';
import LanchesScreen from './src/screens/Lanches/LanchesScreen';
import BebidasScreen from './src/screens/Bebidas/BebidasScreen';
import SobremesasScreen from './src/screens/Sobremesas/SobremesasScreen';
import PerfilScreen from './src/screens/Perfil/PerfilScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
          let icon;

          if (route.name === 'Lanches') icon = 'fast-food';
          if (route.name === 'Bebidas') icon = 'cafe';
          if (route.name === 'Sobremesas') icon = 'ice-cream';
          if (route.name === 'Perfil') icon = 'person';

          return <Ionicons name={icon} size={size} color={color} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ffcc00',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          position: 'absolute',
          justifyContent: 'center',
          left: 30,
          right: 30,
          bottom: 40,
          height: 60,
          borderRadius: 30,
          backgroundColor: '#222',
          marginHorizontal: 20,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 5 },
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarIconStyle: {
          marginTop: 8,
        },
      })}>
      <Tab.Screen name="Lanches" component={LanchesScreen} />
      <Tab.Screen name="Bebidas" component={BebidasScreen} />
      <Tab.Screen name="Sobremesas" component={SobremesasScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Fredoka_600SemiBold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="MainTabs" component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
