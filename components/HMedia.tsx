import React from 'react';
import styled from 'styled-components/native';
import Poster from './Poster';

const HMovie = styled.View`
  padding: 0 30px;
  margin-bottom: 30px;
  flex-direction: row;
`;
const HColumn = styled.View`
  margin-left: 16px;
  width: 80%;
`;
const Overview = styled.Text`
  color: white;
  opacity: 0.8;
  width: 80%;
`;
const Title = styled.Text`
  color: white;
  font-weight: 600;
  margin-top: 7px;
  margin-bottom: 5px;
`;
const Release = styled.Text`
  color: white;
  font-size: 12px;
  margin-vertical: 10px;
`;

interface HMediaProps {
  posterPath: string;
  originalTitle: string;
  overview: string;
  releaseDate?: string;
}

const HMedia: React.FC<HMediaProps> = ({
  posterPath,
  originalTitle,
  overview,
  releaseDate,
}) => (
  <HMovie>
    <Poster path={posterPath} />
    <HColumn>
      <Title>{originalTitle}</Title>
      <Release>
        {releaseDate &&
          new Date(releaseDate).toLocaleDateString('ko', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
      </Release>
      <Overview>
        {overview !== '' && overview.length > 80
          ? `${overview.slice(0, 140)}...`
          : overview}
      </Overview>
    </HColumn>
  </HMovie>
);

export default HMedia;
