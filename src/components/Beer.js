import React, { useState, useEffect } from "react";
import { Card, Col, Avatar, Modal, Button } from "antd";
export default function Beer(props) {
  const [showModal, setShowModal] = useState(false);
  const { Meta } = Card;
  return (
    <Col onClick={(item)=> props.onClick(item)} span={8}>
      <div style={{textAlign:"center"}}>
        <img alt="test" style={{width:"5vw", maxWidth:"50px",minWidth:"35px"}} src={props.image} />
      </div>
    </Col>
  );
}
