import React from "react";
import { Form, Input, Card, Button, InputNumber } from "antd";

const CreateMenu = () => {
  const { TextArea } = Input;
  return (
    <Card title="New Item" style={{ margin: 20 }}>
      <Form layout="vertical" wrapperCol={{ span: 14 }}>
        <Form.Item label="Menu Dish Name" required>
          <Input placeholder="Enter Menu Dish Name" />
        </Form.Item>
        <Form.Item label="Dish Description" required>
          <TextArea rows={3} placeholder="Enter Dish Description" />
        </Form.Item>
        <Form.Item label="Price" required>
          <InputNumber rows={3} placeholder="Enter Dish Price" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateMenu;
