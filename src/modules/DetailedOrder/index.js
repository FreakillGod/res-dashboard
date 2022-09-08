import React, { useEffect } from "react";
import { Card, Descriptions, Divider, List, Button } from "antd";
import dishes from "../../assets/data/dishes.json";
import { useParams } from "react-router-dom";

const DetailedOrder = () => {
  const { id } = useParams();

  useEffect(() => {}, []);
  return (
    <Card title={`Order id: ${id}`} style={{ margin: 20 }}>
      <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
        <Descriptions.Item label="Customer">Maja manu</Descriptions.Item>
        <Descriptions.Item label="Customer Address">
          Adrres is 90-20 from the Mumbau
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <List
        dataSource={dishes}
        renderItem={(dishItem) => (
          <List.Item>
            <div style={{ fontWeight: "bold" }}>
              {dishItem.name} x{dishItem.quantity}
            </div>
            <div>Rs {dishItem.price}</div>
          </List.Item>
        )}
      />
      <Divider />
      <div style={styles.totalSumContainer}>
        <h2>Total:</h2>
        <h2 style={styles.totalPrice}>Rs 24.3/-</h2>
      </div>
      <Divider />
      <div style={styles.buttonCont}>
        <Button style={styles.button} block type="danger" size="large">
          Decline Order
        </Button>
        <Button style={styles.button} block type="primary" size="large">
          Accept Order
        </Button>
      </div>
      <Button block type="primary" size="large">
        Order Completed
      </Button>
    </Card>
  );
};

const styles = {
  totalSumContainer: {
    flexDirection: "row",
    display: "flex",
  },
  totalPrice: {
    marginLeft: "auto",
    fontWeight: "bold",
  },
  buttonCont: {
    display: "flex",
    paddingBottom: 30,
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
  },
};

export default DetailedOrder;
