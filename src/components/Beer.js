import React from "react";
import { Card } from "antd";
import { Col } from "antd";

const { Meta } = Card;

export default function Beer(props) {
  return (
    <Col span={8}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={props.name} src={props.image} />}
      >
        <Meta title={props.tagline} description={props.description} />
      </Card>
    </Col>
  );
}
