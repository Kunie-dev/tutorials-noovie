import React from 'react';
import AppLoading from 'expo-app-loading';
import { Text } from 'react-native';
import { useAssets } from 'expo-asset';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [assets] = useAssets([require('./IMG_0025.jpeg')]);
  const [loaded] = useFonts(Ionicons.font);

  if (!assets || !loaded) {
    return <AppLoading />;
  }

  return <Text>We are done loading</Text>;
}
