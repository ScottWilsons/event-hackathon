import React, { useState } from "react";
import { Card, Button, Modal } from "antd";
import "antd/dist/antd.css";

const { Meta } = Card;

function EventBox({ event }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Card
      hoverable
      style={{
        width: 340,
      }}
      cover={<img alt="article" src={event.images[0].url} />}
    >
      <Meta title={event.name} description={event.name} />
      <Button type="primary" onClick={showModal}>
        Read More
      </Button>
      <Modal
        title={event.name}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{event.name}</p>
        <Button type="link" target="_blank" href={event.url}>
          Continue reading here...
        </Button>
      </Modal>
      <p>{event.name}</p>
    </Card>
  );
}

export default EventBox;
