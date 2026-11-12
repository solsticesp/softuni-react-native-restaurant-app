import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

export default function CartNavigator() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name='Cart' component={CartScreen} />
            <Stack.Screen name='Checkout' component={CheckoutScreen} />
        </Stack.Navigator>
    );
}