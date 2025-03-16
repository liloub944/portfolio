import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              À propos de <strong className="purple">MOI</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* Titre "L'ANNÉE PROCHAINE" centré sur la page */}
        <Row style={{ justifyContent: "center", paddingTop: "50px" }}>
          <Col
            md={12}
            style={{
              textAlign: "center", // Centrage horizontal du texte
              paddingTop: "60px",
            }}
          >
            <h1 style={{ fontSize: "2.4em", fontWeight: "bold" }}>
              L'ANNÉE <strong className="purple">PROCHAINE</strong>
            </h1>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
                <br />
                <br />
                <strong className="purple">- ESGI</strong> : Bachelor Systèmes, Réseaux et Cloud Computing.
                <br />
                <br />
                <strong className="purple">- PSTB</strong> : Double diplôme Licence pro / Bachelor Systèmes, Réseaux et Cloud Computing.
                <br />
                <br />
                <strong className="purple">- Le Rebours</strong> : Licence Réseaux et Cybersécurité au CNAM.
                <br />
                <br />
                <strong className="purple">- Sup de Vinci</strong> : Bachelor Systèmes, Réseaux et Cloud Computing.
                <br />
                <br />
                <br />
              </p>
            </blockquote>
          </Col>
        </Row>

        {/* Section Outils */}
        <h1 className="project-heading">
          <strong className="purple">Outils</strong> que je maîtrise
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;

