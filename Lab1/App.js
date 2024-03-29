import Header from './components/Header';
import Routes from './components/Routes';
import Footer from './components/Footer';
import Products from './screens/Products';
import Pictures from './screens/Pictures';
import Register from './screens/Register';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Header />
        <Routes />
        <Stack.Navigator initialRouteName="Products">
          <Stack.Screen name="Products" component={Products} options={{headerShown: false}} />
          <Stack.Screen name="Pictures" component={Pictures} options={{headerShown: false}} />
          <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
  );
}
