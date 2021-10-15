import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Spacer } from '../../../../features/restarants/components/spacer/spacer.component';
import { Text } from '../../../../features/restarants/components/typography/text.component'
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant.info'


const FavouritesWrapper = styled.View`
padding: 10px;

`;

export const FavouritesBar = ({ favourites, onNavigate }) => {

    if(!favourites.length){
        return null
    }
   
   return (
     <FavouritesWrapper>
       <Spacer variant="left.large">
         <Text variant="caption">Favourites</Text>
       </Spacer>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         {favourites.map((restaurant) => {
           const key = restaurant.name;
           return (
             <Spacer position="left" key={key} size="medium">
               <TouchableOpacity
                 onPress={() => {
                   onNavigate("RestaurantDetail", {
                     restaurant,
                   });
                 }}
               >
                 <CompactRestaurantInfo restaurant={restaurant} />
               </TouchableOpacity>
             </Spacer>
           );
         })}
       </ScrollView>
     </FavouritesWrapper>
   );
  
}
