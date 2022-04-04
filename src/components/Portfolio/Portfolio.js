import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  FirstCardContainer,
  SecondCardContainer,
  ThirdCardContainer,
  FourthCardContainer,
  PortFolioVisit,
  FirstLineContainer,
  FirstPortfolioLine,
  SecondLineContainer,
  ThirdLineContainer,
  SecondPortfolioLine,
  FourthLineContainer,
  FifthLineContainer,
} from "./portfolioStyles";
import { PageContainer } from "../../subComponents/pageContainer";
import { Circle, Square } from "../../subComponents/backgroundElements";
import { data } from '../../assets/data'

import {
  firstCardVariant,
  secondCardVariant,
  thirdCardVariant,
  fourthCardVariant,
  firstLineVariant,
  secondLineVariant,
  thirdLineVariant,
  fourthLineVariant,
  fifthLineVariant,
  squareColorVariant,
} from "./portfolioVariants";

const Portfolio = () => {
  return (
    <PageContainer>
      <FirstCardContainer>
        <Card
          as={motion.div}
          variants={firstCardVariant}
          initial="hidden"
          animate="visible"
        >
          <h3>{data.movieApp.title}</h3>
          <p>{data.movieApp.desciption}</p>
          <PortFolioVisit
            target="_blank"
            to="https://reactoads-movie-app-7c45e.web.app/"
          >
            visit
          </PortFolioVisit>
        </Card>
      </FirstCardContainer>

      <SecondCardContainer>
        <Card
          as={motion.div}
          variants={secondCardVariant}
          initial="hidden"
          animate="visible"
        >
          <h3>{data.pokePalace.title}</h3>
          <p>{data.pokePalace.desciption}</p>
          <PortFolioVisit
            target="_blank"
            to="https://pokepalace-fa118.web.app/"
          >
            visit
          </PortFolioVisit>
        </Card>
      </SecondCardContainer>

      <ThirdCardContainer>
        <Card
          as={motion.div}
          variants={thirdCardVariant}
          initial="hidden"
          animate="visible"
        >
          <h3>{data.toadTribune.title}</h3>
          <p>{data.toadTribune.desciption}</p>
          <PortFolioVisit
            target="_blank"
            to="https://the-toad-tribune-659c7.web.app/"
          >
            visit
          </PortFolioVisit>
        </Card>
      </ThirdCardContainer>

      <FourthCardContainer>
        <Card
          as={motion.div}
          variants={fourthCardVariant}
          initial="hidden"
          animate="visible"
        >
          <h3>{data.kovvi.title}</h3>
          <p>{data.kovvi.desciption}</p>
          <PortFolioVisit to="">
            visit
          </PortFolioVisit>
        </Card>
      </FourthCardContainer>

      {/* -----------Background Design and Animations */}
      <FirstLineContainer
        as={motion.div}
        variants={firstLineVariant}
        initial="hidden"
        animate="visible"
      >
        <FirstPortfolioLine />
      </FirstLineContainer>

      <SecondLineContainer
        as={motion.div}
        variants={secondLineVariant}
        initial="hidden"
        animate="visible"
      >
        <Circle />
        <FirstPortfolioLine />
      </SecondLineContainer>

      <ThirdLineContainer
        as={motion.div}
        variants={thirdLineVariant}
        initial="hidden"
        animate="visible"
      >
        <Circle />
        <SecondPortfolioLine />
        <Square />
      </ThirdLineContainer>

      <FourthLineContainer
        as={motion.div}
        variants={fourthLineVariant}
        initial="hidden"
        animate="visible"
      >
        <FirstPortfolioLine />
        <Square
          as={motion.div}
          variants={squareColorVariant}
          initial="hidden"
          animate="visible"
        />
      </FourthLineContainer>

      <FifthLineContainer
        as={motion.div}
        variants={fifthLineVariant}
        initial="hidden"
        animate="visible"
      >
        <FirstPortfolioLine />
      </FifthLineContainer>
    </PageContainer>
  );
};

export default Portfolio;
