import React, { useState, useContext } from "react";
import {  Platform,TouchableOpacity } from "react-native";
import { FavouritesBar } from '../../map/components/favourites/favourites-bar.component'
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeArea } from "../../../utils/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/mock/restaurants.context";
import { Skeleton } from "../components/Skeleton";
import { Search } from '../components/search.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { RestaurantList } from '../components/restaurant-list.styles';
import { FadeInView } from '../../../features/animations/fade.animation.animation'



const isAndroid = Platform.OS === "android";

export const RestaurantsScreen = ({ navigation }) => {


  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);


  return (
    <>
      <SafeArea>
        <FadeInView>
        <Search isFavouritesToggled={isToggled} onFavouritesToggle={() => setIsToggled(!isToggled)} />
        {isToggled && <FavouritesBar onNavigate={navigation.navigate} favourites={favourites} /> }
        {isLoading && (
            <SafeArea style={{ display: "flex" }}>
              <Skeleton />
            </SafeArea>
        )}
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {
                restaurant: item,
              })}>
                <RestaurantInfoCard restaurant={item} />
              </TouchableOpacity>
            ) ;
          }}
          keyExtractor={(item) => item.name}
        />
        </FadeInView>
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
};
