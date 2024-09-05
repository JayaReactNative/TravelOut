import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Home_screen from '../screen/Home/Home_screen';
import { POPPINS_REGULAR } from '../constant/Fonts';
import LikeScreen from '../screen/LikeScreen';
import ChatsScreen from '../screen/Home/ChatsScreen';
import ProfileScreen from '../screen/Home/ProfileScreen';


const Tab = createBottomTabNavigator();

const DashBoard = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home_screen') {
            iconName = focused ? require('../assets/icons/home_icon_selected.png') : require('../assets/icons/home_icon.png');
          } else if (route.name === 'LikeScreen') {
            iconName = focused ? require('../assets/icons/like_icon_selected.png') : require('../assets/icons/like_icon.png');
          } else if (route.name === 'ChatsScreen') {
            iconName = focused ? require('../assets/icons/chats_icon_selected.png') : require('../assets/icons/chats_icon.png');
          } else if (route.name === 'ProfileScreen') {
            iconName = focused ? require('../assets/icons/profile_icon_selected.png') : require('../assets/icons/profile_icon.png');
          }
          return <Image source={iconName} style={{ width: 50, height: 50 }} />;
        },
        tabBarLabel: () => null,
        tabBarStyle: {
          paddingVertical: 10,
          paddingBottom: 10,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home_screen" component={Home_screen} />
      <Tab.Screen name="LikeScreen" component={LikeScreen} />
      <Tab.Screen name="ChatsScreen" component={ChatsScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default DashBoard;

