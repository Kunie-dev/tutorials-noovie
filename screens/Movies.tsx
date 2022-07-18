import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import {Dimensions} from 'react-native';

const API_KEY = '324228478dcf8e030ba46c4bba337236';

const Container = styled.ScrollView`
  background-color: ${props => props.theme.mainBgColor};
`;

const View = styled.View`
  flex: 1;
`;

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Movies: React.FC<NativeStackScreenProps<any, 'movies'>> = () => {
  const getNowPlaying = () =>
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`,
    );

  return (
    <Container>
      <Swiper
        loop
        timeout={3.5}
        controlsEnabled={false}
        containerStyle={{width: '100%', height: SCREEN_HEIGHT / 4}}>
        <View style={{backgroundColor: 'red'}}></View>
        <View style={{backgroundColor: 'blue'}}></View>
        <View style={{backgroundColor: 'red'}}></View>
        <View style={{backgroundColor: 'blue'}}></View>
      </Swiper>
    </Container>
  );
};

export default Movies;
