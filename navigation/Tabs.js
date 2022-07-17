import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import Movies from '../screens/Movies';
import Search from '../screens/Search';
import Tv from '../screens/Tv';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'tomato',
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'purple',
        headerTitleStyle: {
          color: 'tomato',
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        headerRight: () => (
          <View>
            <Text>Hello</Text>
          </View>
        ),
      }}
    >
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Tv" component={Tv} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}

export default Tabs;
