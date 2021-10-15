import React from 'react'
import styled from 'styled-components';
import { CompactRestaurantInfo } from './restaurant/compact-restaurant.info';



const MyText = styled.Text``;


export const MapCallout = ({ restaurant }) => (
    <>
    <CompactRestaurantInfo isMap restaurant={restaurant} />
    </>
) 