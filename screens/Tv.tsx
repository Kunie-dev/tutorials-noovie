import React from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const Tv: React.FC<NativeStackScreenProps<any>> = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Tv</Text>
    </View>
  );
};

export default Tv;
