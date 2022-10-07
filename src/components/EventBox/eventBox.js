import React, { useState } from "react";
import { Card, Button, Modal } from "antd";
import "antd/dist/antd.css";
import "./eventBox.css";

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

  //   let a = event.dates.end.localDate;
  //   console.log(a);

  return (
    <Card
      hoverable
      style={{
        width: 340,
      }}
      cover={<img className="image" alt="event" src={event.images[0].url} />}
    >
      <Meta title={event.name} />
      <Button type="primary" onClick={showModal}>
        Read More
      </Button>
      <Modal
        title={event.name}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Start Date: {event.dates.start.localDate}</p>
        <p>
          End Date:
          {event.dates.end ? <p>{event.dates.end.localDate}</p> : <p>"TBA"</p>}
        </p>
        <Button type="link" target="_blank" href={event.url}>
          Continue reading here...
        </Button>
      </Modal>
      <p>{event._embedded.venues[0].name}</p>
    </Card>
  );
}

export default EventBox;
