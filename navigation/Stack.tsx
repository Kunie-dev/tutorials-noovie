import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Text, TouchableOpacity} from 'react-native';

const ScreenOne: React.FC<NativeStackScreenProps<any>> = ({
  navigation: {navigate},
}) => {
  return (
    <TouchableOpacity onPress={() => navigate('Two')}>
      <Text>One</Text>
    </TouchableOpacity>
  );
};
const ScreenTwo: React.FC<NativeStackScreenProps<any>> = ({
  navigation: {navigate},
}) => {
  return (
    <TouchableOpacity onPress={() => navigate('Three')}>
      <Text>go to three</Text>
    </TouchableOpacity>
  );
};
const ScreenThree: React.FC<NativeStackScreenProps<any>> = ({
  navigation: {navigate},
}) => {
  return (
    <TouchableOpacity onPress={() => navigate('Tabs', {screen: 'Search'})}>
      <Text>Go to search</Text>
    </TouchableOpacity>
  );
};

const NativeStack = createNativeStackNavigator();
function Stack() {
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <NativeStack.Screen name="One" component={ScreenOne} />
      <NativeStack.Screen name="Two" component={ScreenTwo} />
      <NativeStack.Screen name="Three" component={ScreenThree} />
    </NativeStack.Navigator>
  );
}

export default Stack;
