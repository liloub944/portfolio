import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import basedd from "../../Assets/Projects/basedd.png";
import formu from "../../Assets/Projects/formu.png";
import adrIP from "../../Assets/Projects/adrIP.png"
import projetapp from "../../Assets/Projects/projetapp.png";
import instapp from "../../Assets/Projects/instapp.png";
import logwind from "../../Assets/Projects/logwind.png";
import supportusers from "../../Assets/Projects/supportusers.png";
import php from "../../Assets/Projects/php.png";
import cable from "../../Assets/Projects/cable.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import AD1 from "../../Assets/Projects/AD1.png";
import veille from "../../Assets/Projects/veille.png";
import stackweb from "../../Assets/Projects/stackweb.png";
import { AiOutlineDownload } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";

const pdfPath = "https://github.com/liloub944/PORTFOLIOE4/raw/main/documentation.pdf";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">projets </strong> durant ma formation
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai pû travailler récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Mise en place d'un serveur DHCP sur VM"
              description="La mise en place d’un serveur DHCP sur une machine virtuelle sous Windows Server 2003 dans un environnement VMware permet d’automatiser l’attribution des adresses IP aux postes clients connectés au réseau. Cette configuration simplifie la gestion des adresses IP et évite les conflits potentiels."
              ghLink="https://github.com/liloub944/PORTFOLIOE4/raw/main/Documentation%20DHCP.pdf"          
            />
          </Col>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Création d'un réseau Docker"
              description="La création d’un réseau Docker sur Windows permet de connecter plusieurs conteneurs entre eux afin de leur permettre de communiquer facilement. Cette configuration facilite la gestion des services déployés en assurant leur interconnexion sur un réseau isolé. Dans ce contexte, il est également possible de configurer un volume partagé entre les conteneurs pour qu’ils puissent accéder à des données communes, et d’automatiser certaines tâches à l’aide de cron."
              ghLink="https://github.com/liloub944/PORTFOLIOE4/raw/main/Documentation%20Docker.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Mise en place d'une solution HSRP"
              description="La mise en place d’une solution HSRP (Hot Standby Router Protocol) sur un réseau Cisco permet de garantir la redondance et la haute disponibilité des passerelles par défaut dans un environnement réseau. Cette configuration est essentielle pour assurer la continuité du service en cas de défaillance d’un routeur."
              ghLink="https://github.com/liloub944/PORTFOLIOE4/raw/main/COMPTE%20RENDU%20HSRP.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Création d'un site vitrine pour un prestataire"
              description="La création d’un site vitrine pour un prestataire via WordPress permet de mettre en avant ses services, d’améliorer sa visibilité en ligne et de fournir une plateforme professionnelle pour attirer des clients. WordPress, grâce à sa simplicité d’utilisation et ses nombreuses fonctionnalités, est une solution idéale pour concevoir un site attractif et facile à gérer."
              ghLink="https://www.wp-slf-sio2025.sio1-2lerebours.org/wordpress/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Création de mon portfolio"
              description="Dans le cadre de ma veille technologique, je me suis intéressée aux casques de réalité virtuelle (VR) et à leur évolution. Ces dispositifs sont de plus en plus utilisés dans divers domaines comme la médecine pour la formation des chirurgiens, l’éducation pour l’apprentissage immersif, ainsi que dans l’industrie et l’architecture pour la simulation et la modélisation en 3D."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={veille}
              isBlog={false}
              title="Elaboration d'une veille technologique"
              description="La réalisation de mon portfolio en ligne repose sur une approche pratique et technique en exploitant des technologies modernes du web.J’ai construit ce projet en JavaScript et CSS, en m’appuyant sur le code open-source d’un utilisateur GitHub, que j’ai personnalisé et optimisé selon mes besoins. Cette adaptation m’a permis de comprendre en profondeur la structure du projet, d’améliorer son design et ses fonctionnalités, et d’y intégrer mes propres éléments."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AD1}
              isBlog={false}
              title="Mise en place d'un serveur AD"
              description="Le projet consiste en la mise en place d'un serveur Active Directory sur une machine virtuelle sous VMware. L’objectif est de centraliser la gestion des utilisateurs, des ressources et des stratégies de sécurité au sein d’un réseau d’entreprise. L’infrastructure comprend un contrôleur de domaine sous Windows Server 2016, un service DNS pour la résolution de noms, ainsi que des stratégies de groupe (GPO) pour appliquer des configurations aux postes clients. Un pare-feu est également configuré pour sécuriser l’accès au domaine."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stackweb}
              isBlog={false}
              title="Déploiement d'une Stack web avec Docker et loadbalancer"
              description="Le projet consiste en le déploiement d'une stack web complète en utilisant Docker et un load balancer pour assurer une répartition efficace du trafic. Cette infrastructure comprend un serveur web, une base de données et un reverse proxy gérant la distribution des requêtes. L'utilisation de Docker permet une gestion simplifiée des services, une meilleure scalabilité et un déploiement rapide sur différents environnements."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

         {/* Section Projets durant les stages */}
      <h1 className="project-heading">
        Mes <strong className="purple">projets </strong> durant mes stages
        <br />
        <br />
      </h1>
      <br />
      <br />

      <Row>
      <Col md={12} style={{ textAlign: "center", marginTop: "20px" }}>
  <Button
    variant="primary"
    style={{ 
      fontSize: "1.2em", 
      backgroundColor: "purple", 
      border: "none", 
      marginRight: "10px" // Ajout d'un espace entre les boutons
    }}
    onClick={() => window.open(pdfPath, "_blank")}
  >
    📄 Télécharger les articles
  </Button>

  <Button
    variant="primary"
    style={{ 
      fontSize: "1.2em", 
      backgroundColor: "purple", 
      border: "none", 
      marginLeft: "10px" // Ajout d'un espace entre les boutons
    }}
    onClick={() => window.open(pdfPath, "_blank")}
  >
    📄 Télécharger les articles
  </Button>
</Col>

              </Row>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={basedd}
              isBlog={false}
              title="Création d'une base de données"
              description="La création d'une base de données pour gérer les informations des patients, médecins et techniciens commence par un cahier des charges définissant les besoins (informations personnelles, médicales, historiques, etc.). Ensuite, une modélisation relationnelle est réalisée, avec des tables pour chaque entité (patients, médecins, techniciens), liées par des clés primaires et étrangères. Cela permet d'enregistrer les données telles que les consultations, diagnostics, et interventions. L'implémentation de la base de données se fait via des requêtes SQL pour gérer et consulter les informations, tout en garantissant leur intégrité et sécurité."
              ghLink="https://github.com/liloub944/PORTFOLIOE4/raw/main/Création%20bdd%20sql.pdf"           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={formu}
              isBlog={false}
              title="Développement de formulaires"
              description="La création de formulaires en HTML et CSS pour des patients et des techniciens permet de collecter des informations de manière claire et structurée. Pour les patients, le formulaire inclut des champs comme le nom, la date de naissance, et des informations médicales comme les symptômes. Pour les techniciens, le formulaire peut contenir des champs pour enregistrer les détails des interventions, tels que les diagnostics et les actions effectuées. Le CSS est utilisé pour personnaliser l’apparence des champs, des boutons et des sections du formulaire, offrant ainsi une interface conviviale tout en garantissant la sécurité et la confidentialité des données collectées."
              ghLink="https://github.com/liloub944/PORTFOLIOE4/raw/main/FORMULAIRE.pdf"
             />
            </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={php}
              isBlog={false}
              title="Développement de pages de traitements"
              description="Ce projet consiste en la création de pages de traitement en PHP, permettant la gestion et le traitement des données issues de formulaires ou d'autres interactions utilisateur sur un site web.

J’ai développé ces pages en PHP, en intégrant des fonctionnalités telles que la validation des données, la connexion à une base de données MySQL et le traitement des requêtes pour assurer une bonne gestion des informations envoyées par les utilisateurs."
              ghLink="https://github.com/liloub944/PORTFOLIOE4/raw/main/pages%20de%20traitement.pdf"
            />
          </Col>
        
             <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adrIP}
              isBlog={false}
              title="Adressage IP de postes dans les salles de classes"
              description="L’adressage IP des postes informatiques a été réalisé dans le cadre de l’utilisation de Veyon, une application permettant la supervision et le contrôle des postes clients par un enseignant.

Pour garantir le bon fonctionnement de Veyon, une configuration réseau optimisée a été mise en place, en attribuant des adresses IP fixes aux postes des salles concernées. Cela a permis d’assurer une communication fluide entre le serveur et les clients, évitant ainsi les conflits d’adressage et les problèmes de connexion."
              ghLink="https://github.com/liloub944/PORTFOLIOE4/raw/main/Adressage%20IP%20de%20postes%20dans%20les%20salles%20de%20classes.pdf"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projetapp}
              isBlog={false}
              title="Elaboration d'un projet d'application pour la gestion d'iPad"
              description="Une application est envisagée pour simplifier la gestion des iPads en milieu scolaire, notamment pour leur attribution et leur restitution. L'idée repose sur un système utilisant des QR codes et une base de données centralisée, permettant d’identifier chaque appareil, d’en suivre l’usage et d’automatiser l’enregistrement des prêts et des retours.

L'interface proposerait plusieurs fonctionnalités, comme la scannérisation des bons numériques, la recherche d’un appareil par son numéro de série et la génération de documents de suivi. L’objectif serait d’éviter les pertes et d’assurer une gestion plus efficace des équipements.

"
              ghLink="https://github.com/liloub944/PORTFOLIOE4/raw/main/Projet%20Ipad.pdf"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logwind}
              isBlog={false}
              title="Installion de logiciel sous Windows"
              description="J'ai installé Office 365 sur les postes du CDI et d'une enseignante en utilisant l'invite de commande, avec un déploiement automatisé. Le script XML de configuration existait déjà, il définissait les paramètres nécessaires pour personnaliser l'installation, comme les applications à installer, la langue, et d'autres options.

J'ai simplement utilisé ce fichier XML avec l'invite de commande pour lancer le processus."
              ghLink="https://github.com/liloub944/PORTFOLIOE4/raw/main/Installation%20du%20Pack%20Office%20sur%20l'ordinateur%20d'une%20enseignan.pdf"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supportusers}
              isBlog={false}
              title="Support aux utilisateurs"
              description="Dans le cadre de mes responsabilités au sein de mon lycée, j’interviens régulièrement pour fournir un support informatique aux élèves et aux professeurs dans les salles de classe. Mon rôle consiste à résoudre rapidement tout problème technique lié aux ordinateurs, aux projecteurs, aux connexions réseau, ou à tout autre équipement ou logiciel utilisé durant les cours. Cela inclut la gestion des pannes matérielles, la réinitialisation des appareils, ainsi que l’assistance aux utilisateurs pour résoudre des problèmes logiciels."
              ghLink="https://github.com/liloub944/PORTFOLIOE4/raw/main/Fiche%20proc%C3%A9dure%20%E2%80%9CAvant%20d%E2%80%99appeler%20l%E2%80%99informaticien%E2%80%9D.pdf"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instapp}
              isBlog={false}
              title="Installation d'application sur iPad et attribution d'iPad"
              description="Dans le cadre de ma mission de support informatique, j'ai également assuré l'installation d'applications sur les iPads utilisés au sein du lycée, en utilisant l'outil Jamf School pour la gestion des appareils. Jamf School permet de gérer à distance l’installation et la configuration des applications sur les iPads des élèves et des enseignants.

Mon rôle a été de sélectionner les applications nécessaires, de les déployer sur les iPads via Jamf School et de m'assurer que les appareils étaient correctement configurés pour une utilisation optimale en classe. "
              ghLink="https://github.com/liloub944/PORTFOLIOE4/raw/main/Installation%20app%20iPad.pdf"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cable}
              isBlog={false}
              title="Câblage sur un switch pour le projet borne wifi"
              description="Dans le cadre de mes interventions techniques, j’ai réalisé des opérations de câblage sur des switches réseau, notamment pour le rebranchement de câbles. Ce travail s’inscrivait dans la préparation au remplacement futur d’un switch dans le cadre de l’installation d’une nouvelle borne Wi-Fi.

L’intervention consistait à débrancher les câbles réseau des ports du switch en place, puis à les reconnecter en respectant les configurations et les bonnes pratiques de câblage. J’ai également pris en compte les besoins spécifiques des utilisateurs afin de garantir une connexion réseau optimale et d’assurer que cette transition n’entraîne aucune perturbation dans les salles."
              ghLink="https://github.com/liloub944/PORTFOLIOE4/raw/main/Rec%C3%A2blage%20switch.pdf"          
            />
          </Col>

        </Row>

      
      </Container>
    </Container>
  );
}

export default Projects;
