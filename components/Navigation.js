import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Rides from '../screens/Rides';
import Profile from '../screens/Profile';


const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
              
                options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
                headerShown: false
                }}
            />
            <Tab.Screen
                name="Rides"
                component={Rides}
                options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="list" color={color} size={size} />
                ),
                headerShown: false
                }}
            />
                 <Tab.Screen
                name="Profile"
                component={Profile}
                
                options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" color={color} size={size} />
                ),
                headerShown: false
                }}
            />
           
        </Tab.Navigator>

    );
  
}

export default Navigation;
  