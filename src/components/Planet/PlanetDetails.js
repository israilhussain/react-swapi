import React from "react";
import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";

const PlanetDetails = ({
  name,
  rotation_period,
  orbital_period,
  diameter,
  climate,
  gravity,
  terrain,
  surface_water,
  population
}) => {
  return (
    <div id="container" style={{ padding: "24px" }}>
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={16}>
          <Col span={4}>
            <Card title="Planet name" bordered={false}>
              {name}
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Planet population" bordered={false}>
              {population}
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Planet diameter" bordered={false}>
              {diameter}
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Planet climate" bordered={false}>
              {climate}
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Planet terrain" bordered={false}>
              {terrain}
            </Card>
          </Col>
          <Col span={4}>
            <Card title="Planet surface_water" bordered={false}>
              {surface_water}
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PlanetDetails;
