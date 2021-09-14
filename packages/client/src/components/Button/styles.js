import styled from 'styled-components/native';

export const Container = styled.View``;

export const ButtonContainer = styled.TouchableHighlight`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  border-radius: 5px;
  background-color: #525ea6;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.color || 'white'};
  font-size: ${(props) => props.fontSize || '30px'};
  text-align: center;
  font-family: 'Inter_600SemiBold';
`;
