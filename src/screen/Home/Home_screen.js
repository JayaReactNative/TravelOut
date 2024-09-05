import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TinderSwipeDemo from '../../customSwipe/TinderSwipeDemo';
import { POPPINS_MEDIUM } from '../../constant/Fonts';

const Home_screen = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/icons/back_arrow.png')}
          style={styles.backIcon}
        />
        <Text style={styles.headingText}>travelout</Text>
        <Image
          source={require('../../assets/icons/bolt.png')}
          style={styles.backIcon}
        />
        <Image
          source={require('../../assets/icons/setting_icon.png')}
          style={styles.backIcon}
        />
      </View>


      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        <TinderSwipeDemo />
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 3,
    alignItems:'center',
    backgroundColor: 'white', // Ensure the header has a background if needed
  },
  backIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginHorizontal:5,
  },
  headingText: {
    fontSize: 25,
    fontFamily: POPPINS_MEDIUM,
    color: 'black',
    textAlign: 'center',
    flex: 1, // Ensure text takes available space
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 20,
  },
});


export default Home_screen;
