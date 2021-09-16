import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const DAY_WIDTH = 55;
export const DAY_HEIGHT = 75;

export const Container = styled.View`
  height: 75px;
`;

export const DayContainer = styled(Animated.View)`
  width: ${DAY_WIDTH}px;
  height: ${DAY_HEIGHT}px;

  padding-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #717ec9; */
`;

export const DayNumber = styled(Animated.Text)`
  margin-top: 3px;
  font-size: 28px;
  font-family: Inter_600SemiBold;
`;

export const WeekDay = styled(Animated.Text)`
  font-size: 10px;
  font-family: Inter_500Medium;
`;
