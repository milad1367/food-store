import React, { useState, useEffect } from "react";
import { Card, Col, Avatar, Modal, Button } from "antd";

export default function Beer(props) {
  const [showModal, setShowModal] = useState(false);
  const { Meta } = Card;
  
  return (
    <Col onClick={(item)=> props.onClick(item)} span={8} style={{padding: '0.5rem'}}>
      <div style={{textAlign:"center", borderRadius: "0.2rem", border: '2px solid #00FFFF'}}>
        <img alt="test" style={{width:"5vw", maxWidth:"50px",minWidth:"35px"}} src={props.image} />
      </div>
    </Col>
  );
}
