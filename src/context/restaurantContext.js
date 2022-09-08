import { createContext, useContext, useEffect, useState } from "react";
import { Auth, DataStore } from "aws-amplify";
import { Restaurant } from "../models";

const RestaurantContext = createContext({});

const RestaurantProvider = ({ childer }) => {
  const [user, setUser] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  const sub = user?.attributes?.sub;

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setUser);
  }, []);

  useEffect(() => {
    if (!sub) return;

    DataStore.query(Restaurant, (res) => res.adminSub("eq", sub)).then((res) =>
      setRestaurant(res[0])
    );
  }, []);

  return (
    <RestaurantContext.Provider
      value={{ user, setUser, restaurant, setRestaurant }}
    >
      {childer}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;

export const useRestaurantContext = () => useContext(RestaurantContext);
