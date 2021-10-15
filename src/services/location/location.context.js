import React, { useState, useEffect, createContext } from "react";
import { locationRequest, locationTransform } from "./location.service";
import { Text } from 'react-native';


export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("San Francisco");

  const onSearch = (searchKeyword) => {
 
    setisLoading(true);
    setKeyword(searchKeyword);
  };

  // }; 
  useEffect(() => { 
       if(!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setisLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setisLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >  
    {children} 
    </LocationContext.Provider>
  );
};
