import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useRestaurantContext } from "../../context/restaurantContext";

const SideMenu = () => {
  const { restaurant } = useRestaurantContext();
  const navigate = useNavigate();

  const onClick = async (menuitem) => {
    if (menuitem.key === "signout") {
      await Auth.signOut();
      window.location.reload();
    } else {
      navigate(menuitem.key);
    }
  };
  const menuItem = [
    {
      key: "/",
      label: "Orders",
    },
    {
      key: "menu",
      label: "Menu",
    },
    {
      key: "order-history",
      label: "Order History",
    },
    {
      key: "settings",
      label: "Settings",
    },
    {
      key: "signout",
      label: "Sign Out",
      danger: true,
    },
  ];

  return (
    <>
      {restaurant && <h4>{restaurant.name}</h4>}
      <Menu items={menuItem} onClick={onClick} />
    </>
  );
};

export default SideMenu;
