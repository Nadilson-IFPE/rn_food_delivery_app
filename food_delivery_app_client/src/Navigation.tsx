import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { TailwindProvider } from 'tailwindcss-react-native';


const Stack = createNativeStackNavigator();


export default function Navigation() {
    return (
        <NavigationContainer>
            <TailwindProvider>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                </Stack.Navigator>
            </TailwindProvider>
        </NavigationContainer>
    )
}