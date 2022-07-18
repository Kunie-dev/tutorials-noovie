import styled from 'styled-components/native';

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

const Title = styled.Text`
  color: ${(props) => (props.selected ? 'blue' : 'red')};
`;

function Movies({ navigation: { navigate } }) {
  return (
    <Btn onPress={() => navigate('Stack', { screen: 'Three' })}>
      <Title selected={false}>Movies</Title>
      <Title selected>Movies</Title>
    </Btn>
  );
}

export default Movies;
