import styled from 'styled-components/native';

export const Container = styled.View`
  height: 12px;
  min-width: 45px;
  border-radius: 2px;

  flex-shrink: 1;
  background-color: ${(props) => props.color || '#cc3f3f'};

  align-items: center;
  justify-content: center;

  margin-bottom: 5px;
`;

export const Text = styled.Text`
  color: white;
  font-size: 10px;
`;
