import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;

  margin-bottom: 10px;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const Title = styled.Text`
  font-family: 'Inter_700Bold';
  font-size: 26px;
  margin-right: 5px;
`;

export const Category = styled.Text`
  font-family: Inter_600SemiBold;
  color: #4d4d4d;
`;

export const Description = styled.Text`
  font-family: Inter_400Regular;
  color: #4d4d4d;

  margin: 1px 0;
`;
