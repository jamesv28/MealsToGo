import React, { useState, useEffect, useMemo, createContext } from "react";
import { restaurantRequest, transformTheData } from "./restaurant.service";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  return (
    <RestaurantContext.Provider value={{ restaurants: [1, 2, 3] }}>
      {children}
    </RestaurantContext.Provider>
  );
};
