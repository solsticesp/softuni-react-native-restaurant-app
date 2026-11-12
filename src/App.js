import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar style='auto' />
    <NavigationContainer>
      <Text>Hello from react native navigation app</Text>
    </NavigationContainer>
    </>
  );
}


