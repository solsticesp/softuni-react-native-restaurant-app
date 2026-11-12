import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import { Ionicons } from "@expo/vector-icons"

import InfoScreen from '../screens/InfoScreen';
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';

export default function RootNavigator() {

    const Tab = createBottomTabNavigator();
    // const Tab = createNativeBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeTab"
                component={HomeNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Menu',
                    tabBarIcon: ({ color, size }) => <Ionicons name='restaurant' color={color} size={size} />
                }}
            />

            <Tab.Screen
                name="CartTab"
                component={CartNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color, size }) => <Ionicons name='cart' color={color} size={size} />
                }}

            />

            <Tab.Screen
                name="Info"
                component={InfoScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name='information-circle' color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    );
}