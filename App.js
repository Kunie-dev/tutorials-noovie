import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Asset } from 'expo-asset';

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    await Font.loadAsync(Ionicons.font);
    await Asset.loadAsync(require('./IMG_0025.jpeg'));
    await Image.prefetch(
      'https://cf.channel.io/thumb/200x200/pub-file/9053/608a69eb54f684f4f79e/profile_white_big.png'
    );
  };

  if (!ready) {
    return <AppLoading startAsync={startLoading} onFinish={onFinish} onError={console.error} />;
  }

  return <Text>We are done loading</Text>;
}
