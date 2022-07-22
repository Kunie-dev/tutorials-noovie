import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  RefreshControl,
} from 'react-native';

import Slide from '../components/Slide';
import HMedia from '../components/HMedia';
import VMedia from '../components/VMedia';
import * as moviesApi from '../api';
import {useQuery} from '@tanstack/react-query';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
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
const VSeparator = styled.View`
  width: 20px;
`;
const HSeparator = styled.View`
  height: 20px;
`;

const Movies: React.FC<NativeStackScreenProps<any, 'Movies'>> = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {isLoading: nowPlayingLoading, data: nowPlaying} = useQuery(
    ['nowPlaying'],
    moviesApi.fetchNowPlaying,
  );
  const {isLoading: upcomingLoading, data: upcoming} = useQuery(
    ['upcoming'],
    moviesApi.fetchUpcoming,
    {
      cacheTime: Infinity,
    },
  );
  const {isLoading: trendingLoading, data: trending} = useQuery(
    ['trending'],
    moviesApi.fetchTrending,
  );

  const onRefresh = () => {};

  const renderVMedia = ({item}) => (
    <VMedia
      posterPath={item.poster_path}
      originalTitle={item.original_title}
      voteAverage={item.vote_average}
    />
  );
  const renderHMedia = ({item}) => (
    <HMedia
      posterPath={item.poster_path}
      originalTitle={item.original_title}
      overview={item.overview}
      releaseDate={item.release_date}
    />
  );
  const movieKeyExtractor = item => `${item.id}`;

  useEffect(() => {}, []);

  const loading = nowPlayingLoading || upcomingLoading || trendingLoading;

  return loading ? (
    <Loader>
      <ActivityIndicator />
    </Loader>
  ) : (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      refreshing={refreshing}
      ListHeaderComponent={
        <>
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
              keyExtractor={movieKeyExtractor}
              renderItem={renderVMedia}
              ItemSeparatorComponent={VSeparator}
            />
          </ListContainer>
          <ComingSoonTitle>Coming Soon</ComingSoonTitle>
        </>
      }
      data={upcoming}
      keyExtractor={movieKeyExtractor}
      renderItem={renderHMedia}
      ItemSeparatorComponent={HSeparator}
    />
  );
};

export default Movies;
