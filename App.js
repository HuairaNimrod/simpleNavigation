import { StyleSheet, View } from 'react-native';
import Navigation from './components/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Navigation" component={Navigation} />
        </Stack.Navigator>
    </NavigationContainer>
 
 
  
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  topText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'blue',
  }
});