import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useAssets } from 'expo-asset';
import { useFonts } from 'expo-font';
import Tabs from './navigation/Tabs';

export default function App() {
  const [assets] = useAssets([require('./IMG_0025.jpeg')]);
  const [loaded] = useFonts(Ionicons.font);

  if (!assets || !loaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
