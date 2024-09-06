import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/Home/Home_screen';
import DashBoard from './src/RoutNavigation/DashBoard';


const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home_screen">
        <Stack.Screen name="DashBoard" component={DashBoard} options={{ headerShown: false }} />
        <Stack.Screen name="Home_screen" component={HomeScreen} options={{ headerShown: false }} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;
