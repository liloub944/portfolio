import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je m'appelle  <span className="purple">Lilou Briat </span>
            ,j'ai 19 ans et je suis actuellement en deuxièeme année de <span className="purple"> BTS SIO (Srvices Informatiques aux Organisations), option SISR (Solutions d'Infrastructure, Systèmes et Réseaux)</span> au lycée Le Rebours.
            <br />
            <br />
            Avant cela, j’ai obtenu un baccalauréat général avec les spécialités Sciences Économiques et Sociales (SES) et Mathématiques, ce qui m’a permis de développer une double compétence analytique et technique.
            <br />
            <br />
            Passionnée par les réseaux, la cybersécurité et l’informatique en général, je souhaite poursuivre mes études en intégrant une <span className="purple">licence professionnelle en réseaux et cybersécurité en alternance</span>. À plus long terme, je vise un <span className="purple">master spécialisé en cybersécurité</span>, afin de me perfectionner et d’acquérir une expertise pointue dans ce domaine crucial.
            <br />
            <br />
            Consciente de l'importance des certifications dans le domaine de l'informatqiue et de la cybersécurité, je prévois d'obtenir plusieurs certifications reconnues, telles que la <span className="purple">CCNA (Cisco Certified Network Associate) </span> pour approfondir mes compétences réseaux, ainsi que des certifications en cybersécurité comme <span className="purple">CEH (Certified Ehtical Hacker)</span>. Ces certifications renforceront mon expertise et me permettront d'accéder à des opportunités professionnelles plus avancées.
            <br />
            <br />
            Mon ambition ne se limite pas seulement à la maîtrise technique : je souhaite également <span className="purple">évoluer dans un environnement international</span>. Travailler à l'étranger est un objectif majeur pour moi, notamment dans des pays où l’anglais est couramment utilisé dans le secteur de l’informatique. Cela me permettrait d’allier ma passion pour les réseaux et la cybersécurité avec ma volonté de découvrir de nouvelles cultures et d’améliorer mon anglais technique et professionnel. <span className="purple">L’informatique étant un domaine global</span>, je veux saisir l'opportunité d’exercer dans <span className="purple">des entreprises internationales</span>, participer à des projets d’envergure et relever des défis qui dépassent les frontières.
            <br />
            <br />
            <span className="purple">Curieuse, rigoureuse et déterminée</span>, je suis <span className="purple">motivée</span> par l’envie de relever les défis technologiques de demain et de jouer un rôle clé dans la protection et l’optimisation des infrastructures informatiques. Mon ambition est de devenir une actrice majeure dans le domaine de la cybersécurité et des réseaux, en évoluant dans un environnement dynamique, stimulant et tourné vers l’international.
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
