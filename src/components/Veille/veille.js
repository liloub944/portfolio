import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa"; // Icône de flèche
import { SiGoogle, SiRss, SiFeedly } from "react-icons/si";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Enregistrement des composants nécessaires de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Styled-components pour la timeline
const Timeline = styled.div`
  position: relative;
  padding: 20px 0;
  margin-top: 50px;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  width: 2px;
  background-color: white;
  height: 100%;
  top: 0;
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 40px;
`;

const TimelinePoint = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background-color: rgb(136, 60, 166);
  border-radius: 50%;
  border: 4px solid white;
  top: 0;
`;

const TimelineDate = styled.h3`
  text-align: center;
  margin-top: 30px;
  font-size: 1.8em;
  color: white;
  position: relative;
  left: 70px;
`;

const TimelineEvent = styled.p`
  text-align: center;
  margin-top: 30px;
  font-size: 1.5em;
  color: white;
  position: relative;
  left: 435px;
`;

const TimelineDatee = styled.h3`
  text-align: center;
  margin-top: 30px;
  font-size: 1.8em;
  color: white;
  position: relative;
  right: 70px;
`;

const TimelineEvent1993 = styled.p`
  text-align: center;
  margin-top: 30px;
  font-size: 1.5em;
  color: white;
  position: relative;
  right: 155px;
  word-wrap: break-word;
  max-width: 700px;
`;

const TimelineEvent2012 = styled.p`
  text-align: center;
  margin-top: 30px;
  font-size: 1.5em;
  color: white;
  position: relative;
  left: 600px;
  word-wrap: break-word;
  max-width: 700px;
`;

const TimelineEvent2016 = styled.p`
  text-align: center;
  margin-top: 30px;
  font-size: 1.5em;
  color: white;
  position: relative;
  right: 138px;
  word-wrap: break-word;
  max-width: 700px;
`;

const TimelineEvent2019 = styled.p`
  text-align: center;
  margin-top: 30px;
  font-size: 1.5em;
  color: white;
  position: relative;
  left: 600px;
  word-wrap: break-word;
  max-width: 700px;
`;

const TimelineEvent2020 = styled.p`
  text-align: center;
  margin-top: 30px;
  font-size: 1.5em;
  color: white;
  position: relative;
  right: 150px;
  word-wrap: break-word;
  max-width: 700px;
`;

const TimelineEvent2023 = styled.p`
  text-align: center;
  margin-top: 30px;
  font-size: 1.5em;
  color: white;
  position: relative;
  left: 600px;
  word-wrap: break-word;
  max-width: 700px;
`;

const TimelineEvent2024 = styled.p`
  text-align: center;
  margin-top: 30px;
  font-size: 1.5em;
  color: white;
  position: relative;
  right: 140px;
  word-wrap: break-word;
  max-width: 700px;
`;

function Veille() {
  const pdfPath = "/source.pdf"; // Chemin vers le PDF

  const [chartData, setChartData] = useState({
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],  // Labels des années
    datasets: [
      {
        label: 'Ventes de Casques VR (en millions)',
        data: [0.5, 6.3, 8.6, 8.9, 9.4, 10.5, 12.5, 14, 16, 19],  // Données des ventes à ajuster
        backgroundColor: 'rgba(136, 60, 166, 0.5)',  // Couleur de la barre
        borderColor: 'rgb(136, 60, 166)',  // Couleur de la bordure
        borderWidth: 1,
      }
    ]
  });

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      }
    }
  };

  return (
    <Container fluid className="veille-section" style={{ paddingTop: "120px" }}>
      {/* Section de veille technologique */}
      <Container>
        <Row>
          <Col md={12} style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "3.1em", color: "white" }}>
              MA <span className="purple">VEILLE TECHNOLOGIQUE</span>
            </h2>
            <br />
            <p className="veille-body" style={{ color: "white", fontSize: "1.5em" }}>
              Dans le cadre de ma veille technologique, je m'intéresse particulièrement aux dernières innovations concernant <b className="purple">les casques de réalité virtuelle</b>, qui transforment l'expérience immersive et ouvrent de nouvelles perspectives dans divers domaines, de <b className="purple">l'éducation</b> à l'industrie du <b className="purple">jeu vidéo.</b>
            </p>
            <br />
          </Col>
        </Row>
      </Container>

      {/* Section expliquant la réalité virtuelle */}
      <Container>
        <Row>
          <Col md={12} style={{ textAlign: "left" }}>
            <h1 style={{ fontSize: "2.5em", color: "white" }}>
              QU'EST-CE QUE <span className="purple">LA RÉALITÉ VIRTUELLE ?</span>
            </h1>
            <br />
            <p style={{ fontSize: "1.5em", color: "white", lineHeight: "1.7" }}>
              La réalité virtuelle est une technologie qui permet de <span className="purple"> créer un environnement numérique </span> dans lequel l'utilisateur peut interagir, comme s'il y était vraiment...
            </p>
          </Col>
        </Row>
      </Container>

      {/* Section avec les flèches pour énumérer les idées */}
      <Container>
        <Row>
          <Col md={12} style={{ textAlign: "left" }}>
            <h2 style={{ fontSize: "2em", color: "white" }}>La place des casques VR dans notre vie et sur le marché :</h2>
            <ul style={{ color: "white", fontSize: "1.5em", lineHeight: "1.7" }}>
              <li style={{ display: "flex", alignItems: "center" }}>
                <FaArrowRight style={{ marginRight: "10px", color: "rgb(136, 60, 166)" }} />
                Éducation, jeux vidéos, médecine, industrie, etc...
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <FaArrowRight style={{ marginRight: "10px", color: "rgb(136, 60, 166)" }} />
                Marché des casques VR en expansion.
              </li>
            </ul>
          </Col>
        </Row>
        <br />
        <br />

        <h1 className="project-heading">
          <strong className="purple">Agrégateurs de flux</strong> utilisés
        </h1>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <a href="https://www.google.com/alerts" target="_blank" rel="noopener noreferrer">
          <SiGoogle style={{ color: "white", cursor: "pointer" }} />
          </a>
        </Col>
       <Col xs={4} md={2} className="tech-icons">
          <a href="https://www.talkwalker.com" target="_blank" rel="noopener noreferrer">
      <SiRss style={{ color: "white", cursor: "pointer" }} />
    </a>
  </Col>
</Row>

      </Container>

      <Row>
          <Col md={12} style={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            variant="primary"
            style={{ fontSize: "1.2em", backgroundColor: "purple", border: "none" }}
              onClick={() => window.open(pdfPath, "_blank")}
        >
            📄 Télécharger les articles
            </Button>
          <br/>
          <br/>
          <br/>
          
          
          </Col>
        </Row>

      {/* Section Evolution Technologique */}
      <Container>
        <Row>
          <Col md={12} style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "2.8em", color: "white" }}>
            ÉVOLUTION TECHNOLOGIQUE
            </h1>
          </Col>
        </Row>
      </Container>

      {/* Timeline */}
      <Row style={{ justifyContent: "center" }}>
        <Col md={8}>
          <Timeline>
            <TimelineLine></TimelineLine>
            <TimelineItem>
              <TimelinePoint></TimelinePoint>
              <TimelineDate><strong>1968</strong></TimelineDate>
              <TimelineEvent>
                <strong><span className="purple">Sword of Damocles</span></strong>- 1er casque de réalité virtuelle fonctionnel.
              </TimelineEvent>
            </TimelineItem>

            <TimelineItem>
              <TimelinePoint></TimelinePoint>
              <TimelineDatee><strong>1995</strong></TimelineDatee>
              <TimelineEvent1993>
                <strong><span className="purple">Nintendo Virtual Boy</span></strong> - Console de jeu portable utilisant la réalité virtuelle. Echec commercial en raison de limitations technologiques.
              </TimelineEvent1993>
            </TimelineItem>

            <TimelineItem>
              <TimelinePoint></TimelinePoint>
              <TimelineDate><strong>2012</strong></TimelineDate>
              <TimelineEvent2012>
                <strong><span className="purple">Oculus Rift</span></strong> - 1er casque VR moderne, ouvrant la voie à la réalité virtuelle grand public.
              </TimelineEvent2012>
            </TimelineItem>

            <TimelineItem>
              <TimelinePoint></TimelinePoint>
              <TimelineDatee><strong>2016</strong></TimelineDatee>
              <TimelineEvent2016>
                <strong><span className="purple">Sony Playstation VR</span></strong> - 1er casque VR dédié aux consoles de jeu PS4.
              </TimelineEvent2016>
            </TimelineItem>

            <TimelineItem>
              <TimelinePoint></TimelinePoint>
              <TimelineDate><strong>2019</strong></TimelineDate>
              <TimelineEvent2019>
                <strong><span className="purple">Oculus Quest</span></strong> - Casque VR tout-en-un. Succès commercial grâce à son accessibilité et sa facilité d'utilisation.
              </TimelineEvent2019>
            </TimelineItem>

            <TimelineItem>
              <TimelinePoint></TimelinePoint>
              <TimelineDatee><strong>2020</strong></TimelineDatee>
              <TimelineEvent2020>
                <strong><span className="purple">Oculus Quest 2</span></strong> - Version améliorée du Quest, casque VR le plus vendu de l'histoire.
                <br />
                <br />
                <strong><span className="purple">Varjo XR-3</span></strong> - Casque haut de gamme destiné aux professionnels, avec suivi oculaire pour des applications de simulation et formation.
              </TimelineEvent2020>
            </TimelineItem>

            <TimelineItem>
              <TimelinePoint></TimelinePoint>
              <TimelineDate><strong>2023</strong></TimelineDate>
              <TimelineEvent2023>
                <strong><span className="purple">PlayStation VR2</span></strong>- asque de réalité virtuelle conçu pour la PlayStation 5.
                <br />
                <br />
                <strong><span className="purple">Apple Vision Pro</span></strong>- Casque de réalité mixte. Intérêt croissant des grandes entreprises technologiques pour ce secteur.
              </TimelineEvent2023>
            </TimelineItem>

            <TimelineItem>
              <TimelinePoint></TimelinePoint>
              <TimelineDatee><strong>2024</strong></TimelineDatee>
              <TimelineEvent2024>
              <strong><span className="purple">Meta Quest 3</span></strong> - Casque de réalité mixte (VR et AR). Actuellement l’un des meilleurs casques VR autonomes,
              </TimelineEvent2024>
            </TimelineItem>
          </Timeline>
        </Col>
      </Row>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Row style={{ justifyContent: "center" }}>
  <Col md={8}>
    <hr style={{ borderTop: "2px solid white" }} />
    <p style={{ fontStyle: "italic", fontSize: "1.9em", color: "white", textAlign: "center" }}>
      Le marché mondial de la réalité virtuelle (VR) était évalué à environ 16,73 milliards de dollars américains en 2021 et devrait atteindre 143,86 milliards de dollars d'ici 2029
    </p>
    <hr style={{ borderTop: "2px solid white" }} />
  </Col>
</Row>
<br/>
<br/>
<br/>
<br/>
      {/* Section Graphique */}
      <Container style={{ paddingBottom: "50px" }}>
        <Row>
          <Col md={12} style={{ textAlign: "center" }}>
            <h2 style={{ color: "white", fontSize: "2.8em" }}>
              Évolution des ventes de casques VR dans le monde
            </h2>
            <br />
            <br/>
            <Bar data={chartData} options={chartOptions} />
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>

        <Container>
        <Row>
          <Col md={12} style={{ textAlign: "left" }}>
            <h1 style={{ fontSize: "2.5em", color: "white" }}>
            <span className="purple">LES RISQUES</span> DES CASQUES VR
            </h1>
            <br/>
            <ul style={{ color: "white", fontSize: "1.5em", lineHeight: "1.7" }}>
              <li style={{ display: "flex", alignItems: "center" }}>
                <FaArrowRight style={{ marginRight: "10px", color: "rgb(136, 60, 166)" }} />
                Risques en cybersécurité : Fuites de données personnelles, malaware et piratage, pishing...
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <FaArrowRight style={{ marginRight: "10px", color: "rgb(136, 60, 166)" }} />
                Risques pour la santé : Motion sickness, mal de tête et fatigue visuelle...
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
        
      </Container>
    </Container>
  );
}

export default Veille;



