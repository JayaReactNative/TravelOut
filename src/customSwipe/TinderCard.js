import {
  View,
  Text,
  Dimensions,
  Image,
  Animated,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import React, {useCallback} from 'react';
import TinderLike from './TinderLike';
import {Colors} from '../assets/colors/Colors';
import {
  POPPINS_BOLD,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  POPPINS_SEMIBOLD,
} from '../constant/Fonts';

const {height, width} = Dimensions.get('window');

const TinderCard = ({item, isFirst, swipe, ...rest}) => {
  const rotate = swipe.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['-8deg', '0deg', '8deg'],
  });

  const likeOpacity = swipe.x.interpolate({
    inputRange: [10, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const rejectOpacity = swipe.x.interpolate({
    inputRange: [-100, -10],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const renderChoice = useCallback(
    () => (
      <>
        <Animated.View style={[styles.likeContainer, {opacity: likeOpacity}]}>
          <TinderLike type={'Like'} />
        </Animated.View>
        <Animated.View
          style={[styles.rejectContainer, {opacity: rejectOpacity}]}>
          <TinderLike type={'Nope'} />
        </Animated.View>
      </>
    ),
    [likeOpacity, rejectOpacity],
  );



  return (
    <Animated.View
      style={[
        styles.cardContainer,
        isFirst && {
          transform: [...swipe.getTranslateTransform(), {rotate: rotate}],
        },
      ]}
      {...rest}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={true}
        style={{width: width - 1}}>
        <ImageBackground
          source={item.image}
          style={styles.image}
          resizeMode="cover"
          imageStyle={{borderRadius: 20}}>
          {/* 98% Match view */}
          <View style={styles.matchView}>
            <Text style={styles.matchText}>98% MATCH</Text>
          </View>
          <View style={[styles.contentContainer]}>
            <View>
              <Text style={styles.nameText}>
                {item.first_name},{' '}
                <Text style={styles.ageText}>{item.age}</Text>
              </Text>
              <Text style={styles.distanceText}>{item.distance}</Text>
              <Text style={styles.personalityText}>{item.personality}</Text>
            </View>
            <Image
              source={require('../assets/icons/high_five.png')}
              style={styles.high_five} />
          </View>
        </ImageBackground>

        {/* First Text */}
        <View style={styles.textContainer}>
          <Text style={styles.cardText}>About me</Text>
          <Text style={[styles.descriptionText, {marginVertical: 20}]}>
            I’m currently a student balancing my academic pursuits with a
            part-time job. My dual focus allows. and I’m always looking for ways
            to grow both professionally and personally. Outside of work and
            studies.
          </Text>

          <Text style={styles.cardText}>My personality</Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              backgroundColor: '#edf4fc',
              borderRadius: 10,
              width:Platform.select({ ios: '100%', android: '103%' }),
              padding: 5,
            }}>
            <Image
              source={require('../assets/icons/personality_icon.png')}
              style={{
                width: 60,
                height: 60,
                resizeMode: 'contain',
                marginRight: 7,
              }} />
            <View>
              <Text style={[styles.cardText, {fontSize: 18}]}>
                The Adventourist
              </Text>
              <Text style={styles.descriptionText}>
                I’m willing to take risks and achieve anything
              </Text>
            </View>
          </View>

          <Text style={styles.cardText}>My Interests</Text>
          <View style={styles.iconRow}>
            <View style={styles.halfCard}>
              <Image
                source={require('../assets/icons/camping_icon.png')}
                style={styles.iconStyle}
              />
              <Text style={styles.aboutText}>Camping</Text>
            </View>
            <View style={styles.halfCard}>
              <Image
                source={require('../assets/icons/beaches_icon.png')}
                style={styles.iconStyle}
              />
              <Text style={styles.aboutText}>Beaches</Text>
            </View>
            <View style={styles.halfCard}>
              <Image
                source={require('../assets/icons/surfing_icon.png')}
                style={styles.iconStyle}
              />
              <Text style={styles.aboutText}>Surfing</Text>
            </View>
            <View style={styles.halfCard}>
              <Image
                source={require('../assets/icons/sailing_icon.png')}
                style={styles.iconStyle}
              />
              <Text style={styles.aboutText}>Sailing</Text>
            </View>
            <View style={styles.halfCard}>
              <Image
                source={require('../assets/icons/basketball_icon.png')}
                style={styles.iconStyle}
              />
              <Text style={styles.aboutText}>Basketball</Text>
            </View>
          </View>

          <Text style={styles.cardText}>Languages I Know</Text>
          <View style={styles.iconRow}>
            <View style={styles.halfCard}>
              <Image
                source={require('../assets/icons/msg_icon.png')}
                style={styles.iconStyle}
              />
              <Text style={styles.aboutText}>English</Text>
            </View>
            <View style={styles.halfCard}>
              <Image
                source={require('../assets/icons/msg_icon.png')}
                style={styles.iconStyle}
              />
              <Text style={styles.aboutText}>Hindi</Text>
            </View>
            <View style={styles.halfCard}>
              <Image
                source={require('../assets/icons/msg_icon.png')}
                style={styles.iconStyle}
              />
              <Text style={styles.aboutText}>German</Text>
            </View>
          </View>

          <Text style={styles.cardText}>Countries I have been to</Text>
          <View style={styles.iconRow}>
            <View style={styles.halfCard}>
              <Image
                source={require('../assets/icons/usa_flag_icon.png')}
                style={styles.iconStyle}
              />
              <Text style={styles.aboutText}>USA</Text>
            </View>
            <View style={styles.halfCard}>
              <Image
                source={require('../assets/icons/usa_flag_icon.png')}
                style={styles.iconStyle}
              />
              <Text style={styles.aboutText}>India</Text>
            </View>
            <View style={styles.halfCard}>
              <Image
                source={require('../assets/icons/usa_flag_icon.png')}
                style={styles.iconStyle}
              />
              <Text style={styles.aboutText}>Germany</Text>
            </View>
            <View style={styles.halfCard}>
              <Image
                source={require('../assets/icons/usa_flag_icon.png')}
                style={styles.iconStyle}
              />
              <Text style={styles.aboutText}>Sweden</Text>
            </View>
            <View style={styles.halfCard}>
              <Image
                source={require('../assets/icons/usa_flag_icon.png')}
                style={styles.iconStyle}
              />
              <Text style={styles.aboutText}>Australia</Text>
            </View>
          </View>
        </View>
        {isFirst && renderChoice()}

        <Image
          source={require('../assets/icons/map.png')}
          style={[styles.bottomImage, {marginTop: -25, height: 230}]}
        />
        {/* Same Image Again */}
        <Image
          source={item.image}
          style={[
            styles.bottomImage,
            {borderTopLeftRadius: 25, borderTopRightRadius: 25},
          ]}
        />
        <Image source={item.image} style={styles.bottomImage} />
        <Image
          source={item.image}
          style={[
            styles.bottomImage,
            {borderBottomLeftRadius: 25, borderBottomRightRadius: 25},
          ]}
        />

        <View style={styles.textContainer}>
          <Text style={styles.cardText}>My travel plans</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              width: '100%',
            }}>
            <Image
              source={require('../assets/icons/location_icon.png')}
              style={{
                width: 60,
                height: 60,
                resizeMode: 'contain',
                marginRight: 17,
              }} />
            <View>
              <Text style={[styles.descriptionText, {color: 'grey'}]}>
                I want to travel to
              </Text>
              <Text style={[styles.cardText, {fontSize: 18}]}>
                Oslo, Norway
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              width: '100%',
            }}>
            <Image
              source={require('../assets/icons/date_icon.png')}
              style={{
                width: 60,
                height: 60,
                resizeMode: 'contain',
                marginRight: 17,
              }} />
            <View>
              <Text style={[styles.descriptionText, {color: 'grey'}]}>
                Trip date{' '}
              </Text>
              <Text style={[styles.cardText, {fontSize: 18}]}>
                March, any weekend
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 20,
              width: '100%',
              padding: 5,
            }}>
            <Image
              source={require('../assets/icons/budget_icon.png')}
              style={{
                width: 60,
                height: 60,
                resizeMode: 'contain',
                marginRight: 17,
              }} />
            <View>
              <Text style={[styles.descriptionText, {color: 'grey'}]}>
                My budget
              </Text>
              <Text style={[styles.cardText, {fontSize: 18}]}>
                €500 - €1000
              </Text>
            </View>
          </View>

          <Text
            style={{
              fontSize: 14,
              fontFamily: POPPINS_SEMIBOLD,
              color: Colors.Black,
            }}>
            OTHER DETAILS
          </Text>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 13}}>
            <Image
              style={{height: 33, width: 33, resizeMode: 'contain'}}
              source={require('../assets/icons/user_icon.png')}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: POPPINS_REGULAR,
                color: Colors.Black,
                marginLeft: 15,
              }}>
              I'm a female. Cis women
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 13,
            }}>
            <Image
              style={{height: 33, width: 33, resizeMode: 'contain'}}
              source={require('../assets/icons/earth_icon.png')}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: POPPINS_REGULAR,
                color: Colors.Black,
                marginLeft: 15,
              }}>
              I prefer Long trip
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{height: 33, width: 33, resizeMode: 'contain'}}
              source={require('../assets/icons/wheel_icon.png')}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: POPPINS_REGULAR,
                color: Colors.Black,
                marginLeft: 15,
              }}>
              I prefer to travel by Car,Train
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 13,
            }}>
            <Image
              style={{height: 33, width: 33, resizeMode: 'contain'}}
              source={require('../assets/icons/suitcase_icon.png')}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: POPPINS_REGULAR,
                color: Colors.Black,
                marginLeft: 15,
              }}>
              I'm on Sabbatical leave
            </Text>
          </View>

          <Text style={styles.cardText}>My Instagram</Text>


<View style={styles.imageGroup}>
      <View>
        <Image source={require('../assets/icons/soloImageTwo.png')} style={styles.imageSmallInsta} />
        <Image source={require('../assets/icons/soloImageTwo.png')} style={styles.imageSmallInsta} />
      </View>
      <Image source={require('../assets/icons/soloImageTwo.png')} style={styles.imageLongInsta} />
      <View>
        <Image source={require('../assets/icons/soloImageTwo.png')} style={styles.imageSmallInsta} />
        <Image source={require('../assets/icons/soloImageTwo.png')} style={styles.imageSmallInsta} />
      </View>
    </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}>
              <TouchableOpacity onPress={()=>Alert.alert('No')}>
            <Image
              source={require('../assets/icons/cross_icon.png')}
              style={{
                width: 60,
                height: 60,
                resizeMode: 'contain',
                marginRight: 17,
              }}
            />
              </TouchableOpacity>

              <TouchableOpacity>
            <Image
              source={require('../assets/icons/high_five.png')}
              style={{
                width: 70,
                height: 70,
                resizeMode: 'contain',
                marginRight: 17,
                borderRadius: 50,
                borderColor: 'skyblue',
                borderWidth: 3,
              }}
            />
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>Alert.alert('yes')}>
            <Image
              source={require('../assets/icons/right_icon.png')}
              style={{
                width: 60,
                height: 60,
                resizeMode: 'contain',
                marginRight: 17,
              }}
            />
              </TouchableOpacity>
          </View>


{/* //-------- Share and Report Button */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <TouchableOpacity
              style={{
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 25,
                alignItems: 'center',
                flexDirection: 'row',
                width: '47%',
                paddingVertical: 8,
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/icons/right_icon.png')}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                  marginRight: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: POPPINS_MEDIUM,
                  color: Colors.Black,
                }}>
                Share
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: 30,
                alignItems: 'center',
                flexDirection: 'row',
                width: '47%',
                paddingVertical: 8,
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/icons/right_icon.png')}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                  marginRight: 10,
                }}
              />

              <Text
                style={{
                  fontSize: 14,
                  fontFamily: POPPINS_MEDIUM,
                  color: Colors.Black,
                }}>
                Report
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: width - 1,
    position: 'absolute',
    top: -2,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.White,
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    alignSelf: 'center',
    width: '97%',
    height: 800,
    borderRadius: 20,
    marginLeft: 15,
  },
  bottomImage: {
    marginTop: 4,
    height: 360,
    width: '90%',
  },
  textContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'green',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 20,
    color: 'grey',
  },
  likeContainer: {
    position: 'absolute',
    top: '20%',
    left: 20,
  },
  rejectContainer: {
    position: 'absolute',
    top: '20%',
    right: 20,
  },
  iconRow: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginHorizontal: 'auto',
    marginVertical: 18,
  },
  halfCard: {
    flexDirection: 'row',
    backgroundColor: '#edf4fc',
    borderRadius: 25,
    paddingVertical: 8,
    marginVertical: 5,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginRight: 10,
  },
  iconStyle: {height: 23, width: 23, resizeMode: 'contain', marginRight: 5},
  cardText: {
    fontSize: 20,
    fontWeight: '400',
    color: Colors.Black,
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '300',
    color: Colors.Black,
    width: Platform.select({ ios: 280, android: 300 }),
  },
  aboutText: {
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
  },
  contentContainer: {
    width: '97%',
    padding: 20,
    position: 'absolute',
    top: '85%',
    // alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: Colors.White,
  },
  ageText: {
    fontSize: 27,
    color: Colors.White,
  },
  personalityText: {
    fontSize: 16,
    color: Colors.White,
  },
  distanceText: {
    fontSize: 14,
    color: Colors.White,
  },
  matchView: {
    position: 'absolute',
    top: '83%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 4,
    marginLeft: 18,
    paddingHorizontal: 6,
    borderRadius: 6,
  },
  matchText: {
    color: Colors.White,
    textAlign: 'center',
    fontWeight: POPPINS_BOLD,
  },
  high_five: {
    marginTop: 13,
    height: 70,
    width: 70,
    resizeMode: 'contain',
  },
  imageGroup: {
    marginVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  imageLongInsta: {
    width: Platform.select({ ios: 100, android: 115 }),
    height: Platform.select({ ios: 170, android: 170 }),
    resizeMode: 'cover',
    borderRadius: 10,
    marginVertical: 5,
  },

  imageSmallInsta: {
    width: Platform.select({ ios: 110, android: 120 }),
    height: Platform.select({ ios: 80, android: 80 }),
    borderRadius: 10,
    marginVertical: 5,
  },
});

export default TinderCard;
