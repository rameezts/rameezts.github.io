import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiChrome, DiCodepen } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSublimetext,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiChrome/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCodepen/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSublimetext/>
      </Col>
    </Row>
  );
}

export default Toolstack;
