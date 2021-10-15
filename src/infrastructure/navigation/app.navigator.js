import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Skeleton } from "../../../src/features/restarants/components/Skeleton";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../../src/utils/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { View, Text, Button } from "react-native";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { RestaurantsContextProvider } from "../../services/restaurants/mock/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { SettingsScreen } from '../../features/settings/screens/settings.screen';
import { SettingsNavigator } from './settings.navigator'


export const MyTabs = () => {


  const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
  };

  // const tabBarIcon = () => <Ionicons name={"iconName"} size={size} color={color} />;
  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
    };
  };

  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen
              options={{ headerShown: false }}
              name="Restaurants"
              component={RestaurantsNavigator}
            />
            <Tab.Screen
              options={{ headerShown: false }}
              name="Map"
              component={MapScreen}
            />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};

const Tab = createBottomTabNavigator();
