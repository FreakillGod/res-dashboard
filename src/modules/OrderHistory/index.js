import React from "react";
import orders from "../../assets/data/orders-history.json";
import { Card, Table, Tag } from "antd";

const OrderHistory = () => {

  const renderOrderStatus = (status) => {
    if (status == "Delivered") {
      return <Tag color={"green"}>{status}</Tag>;
    }
    return <Tag color={"orange"}>{status}</Tag>;
  };

  const tableColumns = [
    { title: "Order ID", dataIndex: "orderID", key: "orderID" },
    {
      title: "Delivery Address",
      dataIndex: "deliveryAddress",
      key: "deliveryAddress",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `Rs ${price}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: renderOrderStatus,
    },
  ];

  return (
    <Card title={"Orders History"} style={{ margin: 20 }}>
      <Table
        dataSource={orders}
        columns={tableColumns}
        rowKey="orderID"
      />
    </Card>
  );
};

export default OrderHistory;
