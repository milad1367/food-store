import React from "react";
import { Col } from "antd";
export default function Beer(props) {
  return (
    <Col onClick={(item)=> props.onClick(item)} span={8}>
      <div style={{textAlign:"center"}}>
        <img alt="test" style={{width:"5vw", maxWidth:"50px",minWidth:"35px"}} src={props.image} />
      </div>
    </Col>
  );
}
