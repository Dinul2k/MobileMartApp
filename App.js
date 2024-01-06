import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import store from './redux/store';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';
import ImageUploadScreen from './screens/ImageUploadScreen';



const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="ImageUploadScreen"
          component={ImageUploadScreen}
          options={{ headerShown: false }}
        />
    
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
};

export default App;