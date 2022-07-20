import React from 'react';
import Poster from './Poster';
import Votes from './Votes';
import styled from 'styled-components/native';

const VMovie = styled.View`
  align-items: center;
`;
const Title = styled.Text`
  color: white;
  font-weight: 600;
  margin-top: 7px;
  margin-bottom: 5px;
`;

interface VMediaProps {
  posterPath: string;
  originalTitle: string;
  voteAverage: number;
}

const VMedia: React.FC<VMediaProps> = ({
  posterPath,
  originalTitle,
  voteAverage,
}) => (
  <VMovie>
    <Poster path={posterPath} />
    <Title>
      {originalTitle.slice(0, 12)}
      {originalTitle.length > 12 ? '...' : null}
    </Title>
    <Votes votes={voteAverage} />
  </VMovie>
);

export default VMedia;
