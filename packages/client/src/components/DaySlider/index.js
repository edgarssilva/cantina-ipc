import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, Dimensions, View } from 'react-native';
import { Container, FlatList, DayContainer, DayNumber, WeekDay, DAY_WIDTH, DAY_HEIGHT } from './styles';

const WIDTH = Dimensions.get('window').width;

const data = [
  { day: '25', padding: 'left' },
  { day: '26', weekDay: 'Seg' },
  { day: '27', weekDay: 'Seg' },
  { day: '28', weekDay: 'Seg' },
  { day: '29', weekDay: 'Ter' },
  { day: '30', weekDay: 'Qua' },
  { day: '31', weekDay: 'Qui' },
  { day: '1', weekDay: 'Sex' },
  { day: '2', weekDay: 'Sab' },
  { day: '3', weekDay: 'Dom' },
  { day: '4', weekDay: 'Dom' },
  { day: '5', padding: 'right' },
];

const DaySlider = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const renderItem = useCallback(
    ({ item, index }) => <DayItem item={item} index={index} scrollX={scrollX} />,
    []
  );

  const keyExtractor = useCallback((item, index) => `${item.day}`, []);

  const getItemLayout = useCallback(
    (data, index) => ({
      length: data.padding ? (WIDTH - DAY_WIDTH) / 2 - 2 : DAY_WIDTH,
      offset: DAY_WIDTH * index,
      index,
    }),
    []
  );

  return (
    <Container>
      <Animated.FlatList
        data={data}
        bounces={false}
        horizontal
        centerContent
        snapToAlignment='center'
        snapToInterval={DAY_WIDTH}
        decelerationRate={0}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={16}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        initialScrollIndex={data.length / 2}
        // initialNumToRender={7}
        // removeClippedSubviews={true}
        // contentContainerStyle={{ height: DAY_HEIGHT, alignItems: 'center' }}
      />
    </Container>
  );
};

const DayItem = ({ index, item, scrollX }) => {
  if (item.padding)
    return <View style={{ width: (WIDTH - DAY_WIDTH) / 2 - 2 /* 2 metade da margin extra*/ }} />;

  const inputRange = [(index - 2) * DAY_WIDTH, (index - 1) * DAY_WIDTH, index * DAY_WIDTH];

  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [-10, 0, -10],
    extrapolate: 'clamp',
  });

  const bottomPadding = scrollX.interpolate({
    inputRange,
    outputRange: [0, 10, 0],
    extrapolate: 'clamp',
  });

  const sideMargin = scrollX.interpolate({
    inputRange,
    outputRange: [0, 4, 0],
    extrapolate: 'clamp',
  });

  const backgroundColor = scrollX.interpolate({
    inputRange,
    outputRange: ['rgb(113, 126, 201)', 'rgb(82, 94, 166)', 'rgb(113, 126, 201)'],
    extrapolate: 'clamp',
  });

  const radius = scrollX.interpolate({
    inputRange,
    outputRange: [0, 5, 0],
    extrapolate: 'clamp',
  });

  const fontScale = scrollX.interpolate({
    inputRange,
    outputRange: [1, 1.14, 1],
    extrapolate: 'clamp',
  });

  const fontColor = scrollX.interpolate({
    inputRange,
    outputRange: ['#d4d8ef', '#ffffff', '#d4d8ef'],
    extrapolate: 'clamp',
  });
  return (
    <DayContainer
      style={{
        backgroundColor: backgroundColor,
        borderBottomLeftRadius: radius,
        borderBottomRightRadius: radius,
        paddingBottom: bottomPadding,
        transform: [{ translateY }],
        marginLeft: sideMargin,
        marginRight: sideMargin,
      }}
    >
      <DayNumber style={{ transform: [{ scale: fontScale }], color: fontColor }}>{item.day}</DayNumber>
      <WeekDay style={{ transform: [{ scale: fontScale }], color: fontColor }}>{item.weekDay}</WeekDay>
    </DayContainer>
  );
};

export default DaySlider;
