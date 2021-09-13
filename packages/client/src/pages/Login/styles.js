import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  overflow: hidden;
  background-color: #525ea6;
`;

export const LogoContainer = styled.View`
  height: 35%;
  padding: 25px; /*Plus image padding*/
  align-items: flex-start;
  justify-content: flex-end;
`;

export const InputContainer = styled.View`
  margin: 5px 0;
`;

export const Main = styled.View`
  min-height: 65%;
  flex-direction: column;
  justify-content: space-between;

  padding: 25px;
  padding-bottom: 40px;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const PreTitle = styled.Text`
  font-size: 22px;
  font-family: Inter_500Medium;
  margin-bottom: -12px;
`;

export const Title = styled.Text`
  font-size: 42px;
  font-family: Inter_700Bold;
`;
