import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';

function ScreenOne({ navigation: { navigate } }) {
  return (
    <TouchableOpacity onPress={() => navigate('Two')}>
      <Text>One</Text>
    </TouchableOpacity>
  );
}
function ScreenTwo({ navigation: { navigate } }) {
  return (
    <TouchableOpacity onPress={() => navigate('Three')}>
      <Text>go to three</Text>
    </TouchableOpacity>
  );
}
function ScreenThree({ navigation: { navigate } }) {
  return (
    <TouchableOpacity onPress={() => navigate('Tabs', { screen: 'Search' })}>
      <Text>Go to search</Text>
    </TouchableOpacity>
  );
}

const NativeStack = createNativeStackNavigator();
function Stack() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <NativeStack.Screen name="One" component={ScreenOne} />
      <NativeStack.Screen name="Two" component={ScreenTwo} />
      <NativeStack.Screen name="Three" component={ScreenThree} />
    </NativeStack.Navigator>
  );
}

export default Stack;
