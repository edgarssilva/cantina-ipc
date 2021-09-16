import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #525ea6;
`;

export const LogoContainer = styled.View`
  max-height: 50%;
  padding: 20px; /*Plus image padding*/
  align-items: flex-start;
  justify-content: flex-end;

  margin-bottom: 10px;
`;

export const InputContainer = styled.View`
  margin: 5px 0;
`;

export const Main = styled.View`
  min-height: 50%;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px;
  padding-bottom: 30px;
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

export const BottomContainer = styled.View`
  margin-top: 5px;
`;
