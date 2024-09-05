import {
  View,
  Text,
  Animated,
  PanResponder,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import TinderCard from './TinderCard';

const TinderSwipeDemo = () => {
  const [data, setData] = useState([
    {
      image: require('../assets/icons/soloImageThree.png'),
      id: 1,
      first_name: 'Jessica Alba',
      age: '26',
      personality: 'Works at Google',
      distance: '12 km away',
    },
    {
      image: require('../assets/icons/soloImageOne.png'),
      id: 2,
      first_name: 'Chris Hemsworth',
      age: '35',
      personality: 'Actor in Hollywood',
      distance: '8 km away',
    },
    {
      image: require('../assets/icons/soloImageTwo.png'),
      id: 3,
      first_name: 'Emma Watson',
      age: '30',
      personality: 'Activist and Actress',
      distance: '20 km away',
    },
    {
      image: require('../assets/icons/soloImageThree.png'),
      id: 4,
      first_name: 'Daniel Radcliffe',
      age: '32',
      personality: 'Writer and Actor',
      distance: '15 km away',
    },
    {
      image: require('../assets/icons/soloImage.png'),
      id: 5,
      first_name: 'Margot Robbie',
      age: '32',
      personality: 'Film Producer and Actress',
      distance: '10 km away',
    }, 
  ]);


  useEffect(() => {
    if (!data.length) {
      setData([
          {
            image: require('../assets/icons/soloImageThree.png'),
            id: 1,
            first_name: 'Jessica Alba',
            age: '26',
            personality: 'Works at Google',
            distance: '12 km away',
          },
          {
            image: require('../assets/icons/soloImageOne.png'),
            id: 2,
            first_name: 'Chris Hemsworth',
            age: '35',
            personality: 'Actor in Hollywood',
            distance: '8 km away',
          },
          {
            image: require('../assets/icons/soloImageTwo.png'),
            id: 3,
            first_name: 'Emma Watson',
            age: '30',
            personality: 'Activist and Actress',
            distance: '20 km away',
          },
          {
            image: require('../assets/icons/soloImage.png'),
            id: 4,
            first_name: 'Daniel Radcliffe',
            age: '32',
            personality: 'Writer and Actor',
            distance: '15 km away',
          },
          {
            image: require('../assets/icons/soloImageThree.png'),
            id: 5,
            first_name: 'Margot Robbie',
            age: '32',
            personality: 'Film Producer and Actress',
            distance: '10 km away',
          },     
      ]);
    }
  }, [data]);
  const swipe = useRef(new Animated.ValueXY()).current;
  const rotate = useRef(new Animated.Value(0)).current;

  const panResponser = PanResponder.create({
    // onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (_, gestureState) => {
      // Allow PanResponder only if horizontal movement is larger than vertical
      if( (Math.abs(gestureState.dx) > Math.abs(gestureState.dy * 3) ) &&(Math.abs(gestureState.vx) > Math.abs(gestureState.vy * 3) )) {
        return true
      } else {
        return false
      }
    },
    onPanResponderMove: (_, {dx, dy}) => {
      console.log('dx:' + dx + ' dy:' + dy);
      swipe.setValue({x: dx, y: 0});
    },

    onPanResponderRelease: (_, {dx, dy}) => {
      console.log('released:' + 'dx:' + dx + ' dy:' + dy);
      let direction = Math.sign(dx);
      let isActionActive = Math.abs(dx) > 200;
      if (isActionActive) {
        Animated.timing(swipe, {
          toValue: {x: 500 * dx, y: dy},
          useNativeDriver: true,
          duration: 500,
        }).start(removeCard);
      } else {
        Animated.spring(swipe, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });
  const removeCard = useCallback(() => {
    setData(prepState => prepState.slice(1));
    swipe.setValue({x: 0, y: 0});
  }, [swipe]);

   
  return (
    <>
      {data
        .map((item, index) => {
          let isFirst = index === 0;
          let dragHanlders = isFirst ? panResponser.panHandlers : {};
          return (
            <TinderCard
              item={item}
              rotate={rotate}
              isFirst={isFirst}
              swipe={swipe}
              {...dragHanlders}
            >
              {/* <Image
                style={styles.fullImage}
                source={item.image}
                resizeMode="cover"
              /> */}
            </TinderCard>
          );
        })
        .reverse()}
    </>
  );
};

export default TinderSwipeDemo;
