import React,{ useState, createContext, useEffect, useMemo, useContext } from 'react';

import { restaurantRequest, restaurantTransform } from './restaurants.service';
import { LocationContext } from '../../location/location.context'

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext)

    const retriveRestaurants = (loc) => {
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(() => {
            restaurantRequest(loc).then(restaurantTransform).then(results => {
                setRestaurants(results)
                setIsLoading(false);
            }).catch(err => {
                setError(err);
                setIsLoading(false);
            })
        },2000)
    }

    useEffect(() => {
        if(location){

        console.log(location)
        const locationString = `${location.lat},${location.lng}`;
        console.log(locationString) 
        retriveRestaurants(locationString);
        // console.log(locationString) 
    }
    },[location]);
 
    return (
        <RestaurantsContext.Provider value={{ restaurants: restaurants, isLoading, error }}>
            {children}
        </RestaurantsContext.Provider>
    )
}