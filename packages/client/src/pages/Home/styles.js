import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Main = styled.View`
  flex: 1;

  display: flex;
  flex-direction: column;
  margin: 0 20px;

  padding-top: 5px;
  padding-bottom: 30px;
`;

export const PlateList = styled.ScrollView`
  flex: 1;
`;

export const Reservation = styled.View`
  margin-top: 15px;
  width: 100%;
`;
