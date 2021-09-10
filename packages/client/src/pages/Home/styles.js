import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding-top: 75px; /*Day Slider to be added*/

  margin: 0 25px;
`;

export const PlateList = styled.ScrollView`
  flex: 1;
`;

export const Reservation = styled.View`
  margin: 10px;
  margin-bottom: 20px;
`;
