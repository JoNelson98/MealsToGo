import React, { useContext } from 'react';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { FlatList, SafeAreaView, Platform, Pressable, TouchableOpacity } from "react-native";
import { Text } from '../../../features/restarants/components/typography/text.component';
import { Spacer } from '../../../features/restarants/components/spacer/spacer.component';
import { SafeArea } from '../../../utils/safe-area.component';
import styled from 'styled-components';
import { RestaurantList } from '../../restarants/components/restaurant-list.styles';
import { RestaurantInfoCard } from '../../restarants/components/restaurant-info-card.component';

const NoFavouritesArea = styled(SafeArea)`
align-items: center;
justify-content: center;
`;


export const FavouritesScreen = ({ navigation }) => {

    const { favourites } = useContext(FavouritesContext);



    return  favourites.length ? (
        <SafeArea>
            <RestaurantList
                data={favourites}
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
            >
            </RestaurantList>
        </SafeArea>
    ) : (
            <NoFavouritesArea>
            <Text center > No Faves yet...</Text>
            </NoFavouritesArea>
       
    
    );
 
}