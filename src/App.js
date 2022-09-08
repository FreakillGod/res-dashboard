import React from "react";
import "./index.css";
import DetailedOrder from "./modules/DetailedOrder";
import Orders from "./modules/Orders";
import RestaurantMenu from "./modules/RestaurantMenu";
import CreateMenu from "./modules/CreateMenu";
import OrderHistory from "./modules/OrderHistory";
import Settings from "./modules/Settings";
import SideMenu from "./components/Sidemenu";
import { Layout, Image, Slider } from "antd";
import { Route, Routes } from "react-router-dom";
import { Amplify } from "aws-amplify";
import awscongif from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import RestaurantProvider from "./context/restaurantContext";

Amplify.configure(awscongif);

const { Sider, Content, Footer } = Layout;

function App() {
  return (
    <RestaurantProvider>
      <Layout>
        <Sider style={{ height: "100vh", backgroundColor: "#fff" }}>
          <Image
            preview={false}
            src="https://images.unsplash.com/photo-1572037604517-4651d6444ffc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
          />
          <SideMenu />
        </Sider>
        <Layout>
          <Routes>
            <Route path="/" element={<Orders />} />
            <Route path="/order/:id" element={<DetailedOrder />} />
            <Route path="/menu" element={<RestaurantMenu />} />
            <Route path="/menu/create" element={<CreateMenu />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <Footer style={{ textAlign: "center", marginTop: "auto" }}>
            CURRY 65 Dashboard copyright @2022
          </Footer>
        </Layout>
      </Layout>
    </RestaurantProvider>
  );
}

export default withAuthenticator(App);
