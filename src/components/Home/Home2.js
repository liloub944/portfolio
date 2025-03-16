import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI ME <span className="purple"> PRESENTER </span>
            </h1>
            <p className="home-about-body">
            Je suis actuellement en deuxième année de BTS SIO option SISR au lycée Le Rebours, où je développe mes compétences en gestion des systèmes et réseaux.
              <br />
              <br />
              <br />Je suis spécialisée dans la mise en place, l'entretien et la sécurisation des réseaux, en utilisant des technologies comme <b className="purple"> Cisco </b> pour les configurations réseau et <b className="purple"> VMware </b> pour la virtualisation des infrastructures.
              <br />
              <br />
              Mon objectif est d'assurer le bon fonctionnement et la performance des réseaux tout en anticipant les enjeux de sécurité.
              <br />
              <br />
              Dans le futur, je souhaite poursuivre mes études pour me spécialiser davantage dans les domaines des <b className="purple">réseaux</b> et de la <b className="purple">cybersécurité</b>, en visant des compétences avancées dans la gestion et la sécurisation des infrastructures complexes.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="" alt="" />
            </Tilt>
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
