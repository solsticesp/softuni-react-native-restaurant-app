import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';

import InfoScreen from '../screens/InfoScreen';
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';

export default function RootNavigator() {

    const Tab = createBottomTabNavigator();
    // const Tab = createNativeBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeTab" component={HomeNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="CartTab" component={CartNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Info" component={InfoScreen} />
        </Tab.Navigator>
    );
}