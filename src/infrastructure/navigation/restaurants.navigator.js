import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { RestaurantsScreen } from '../../features/restarants/screens/RestaurantsScreen';
import { Text } from 'react-native'
import { RestaurantDetailScreen } from '../../features/restarants/screens/restaurant-detail.screen';
const RestaurantStack = createStackNavigator();


export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator headerMode="none" screenOptions={{
            ...TransitionPresets.ModalPresentationIOS,
        }} >
            <RestaurantStack.Screen 
            name="Restaurants"
            component={RestaurantsScreen}
            />
            <RestaurantStack.Screen 
            name="RestaurantDetail"
            component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    )

}