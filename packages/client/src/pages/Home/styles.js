import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;

  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
