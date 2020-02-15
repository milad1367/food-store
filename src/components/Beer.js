import React, { useState, useEffect } from "react";
import { Card, Col, Avatar, Modal, Button } from "antd";
export default function Beer(props) {
  const [showModal, setShowModal] = useState(false);
  const { Meta } = Card;
  return (
    <Col
      align="middle"
      justify="space-between"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid red",
        paddingTop: "1em",
        paddingBottom: "1em",
        margin: "1em"
      }}
      xs={4}
      onClick={() => setShowModal(true)}
    >
      <img alt="img" style={{ width: "30px" }} src={props.image} />
    </Col>
  );
}
