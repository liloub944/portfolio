import React from "react";
import { Col, Row } from "react-bootstrap";
import { VscVscode } from "react-icons/vsc";
import {
  SiDocker,
  SiCisco,
  SiVmware,
  SiLinux,
  SiWindows,
  SiVisualstudiocode,
} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCisco />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVmware />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode/>
      </Col>
      
    </Row>
  );
}

export default Toolstack;
