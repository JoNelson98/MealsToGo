import React, { useState, useContext, useEffect } from 'react'
import  MapView  from 'react-native-maps';
import styled from 'styled-components';
import { Search } from '../components/search.component';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/mock/restaurants.context'
import { View, Text } from 'react-native'
import { MapCallout } from '../../map/components/map-callout.component';
import { TouchableOpacity } from 'react-native';




const Map = styled(MapView)`
height: 100%;
width: 100%;

`;



export const MapScreen = ({ navigation }) => {

    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);

    const [latDelta, setLatDetlta] = useState(0);

    const { lat, lng, viewport } = location;
    console.log(viewport)

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDetlta( northeastLat - southwestLat);

    },[location, viewport])


    return  (
        <>
        <Search />
        <Map region={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02,
        }}>
        {restaurants.map( restaurant => {
            return <MapView.Marker
            key={restaurant.name}
            title={restaurant.title}
            coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
            }}
            >
                
                <MapView.Callout
                onPress={() => navigation.navigate("RestaurantDetail", { restaurant: restaurant }) }
                >
                <View>
                <MapCallout restaurant={restaurant} />
                </View>
                </MapView.Callout>
                
            </MapView.Marker>
        })}
        </Map>
        </>
    ) 
}
