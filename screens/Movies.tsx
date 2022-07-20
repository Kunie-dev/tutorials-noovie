import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';
import {
  ActivityIndicator,
  Dimensions,
  RefreshControl,
  View,
} from 'react-native';
import Slide from '../components/Slide';
import HMedia from '../components/HMedia';
import VMedia from '../components/VMedia';

const API_KEY = '324228478dcf8e030ba46c4bba337236';
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Container = styled.ScrollView``;
const ListTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
`;
const TrendingScroll = styled.FlatList`
  margin-top: 20px;
`;
const ListContainer = styled.View`
  margin-bottom: 40px;
`;
const ComingSoonTitle = styled(ListTitle)`
  margin-bottom: 30px;
`;

const Movies: React.FC<NativeStackScreenProps<any, 'Movies'>> = () => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [trending, setTrending] = useState([]);
  const getNowPlaying = async () => {
    const {results} = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`,
      )
    ).json();

    setNowPlaying(results);
  };
  const getUpcoming = async () => {
    const {results} = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=KR`,
      )
    ).json();

    setUpcoming(results);
  };
  const getTrending = async () => {
    const {results} = await (
      await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
      )
    ).json();

    setTrending(results);
  };
  const getData = async () => {
    try {
      await Promise.all([getNowPlaying(), getUpcoming(), getTrending()]);
    } finally {
      setLoading(false);
    }
  };
  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await getData();
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return loading ? (
    <Loader>
      <ActivityIndicator />
    </Loader>
  ) : (
    <Container
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Swiper
        horizontal
        loop
        autoplay
        autoplayTimeout={3.5}
        showsButtons={false}
        showsPagination={false}
        containerStyle={{
          marginBottom: 30,
          width: '100%',
          height: SCREEN_HEIGHT / 4,
        }}>
        {nowPlaying.map(movie => (
          <Slide
            key={movie.id}
            backdropPath={movie.backdrop_path}
            posterPath={movie.poster_path}
            originalTitle={movie.original_title}
            voteAverage={movie.vote_average}
            overview={movie.overview}
          />
        ))}
      </Swiper>
      <ListContainer>
        <ListTitle>Trending Movies</ListTitle>
        <TrendingScroll
          contentContainerStyle={{
            paddingHorizontal: 30,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trending}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => (
            <VMedia
              posterPath={item.poster_path}
              originalTitle={item.original_title}
              voteAverage={item.vote_average}
            />
          )}
          ItemSeparatorComponent={() => <View style={{width: 30}} />}
        />
      </ListContainer>
      <ComingSoonTitle>Coming Soon</ComingSoonTitle>
      {upcoming.map(movie => (
        <HMedia
          key={movie.id}
          posterPath={movie.poster_path}
          originalTitle={movie.original_title}
          overview={movie.overview}
          releaseDate={movie.release_date}
        />
      ))}
    </Container>
  );
};

export default Movies;
