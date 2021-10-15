import React from "react";
import styled from "styled-components/native";
import { Favourite } from '../../../features/map/components/favourites/favourite.component'
import { Text } from '../components/typography/text.component';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../components/spacer/spacer.component';

import { Icon, 
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Address 
  } from './restaurant-info-card.styles'






export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevated elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label"> {name}</Text>
        <Section>
        <Rating>
        {ratingArray.map((_, i) => (
              <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20}  />
        ))}
        </Rating>
        <SectionEnd>
          {isClosedTemporarily && <Text variant="error" >ClOSED TEMPORARILY</Text> }
          <Spacer position="left" size="large">
          {isOpenNow && <SvgXml  xml={open} width={20} height={20}  /> } 
          </Spacer>
          <Spacer position="left" size="large">
          <Icon source={{ uri: icon }} />   
          </Spacer>
        
        </SectionEnd>
      


        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
