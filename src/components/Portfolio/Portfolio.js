import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  PortfolioContentContainer,
  PortfolioImage,
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

import { data } from "../../assets/data";
import MovieApp from "../../assets/movieApp.png";
import PokePalace from "../../assets/pokePalace.png";
import ToadTribune from "../../assets/toadTribune.png";
import Kovvi from "../../assets/kovviShot.png";

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
  const [firstCardActive, setFirstCardActive] = useState(false);
  const [secondCardActive, setSecondCardActive] = useState(false);
  const [thirdCardActive, setThirdCardActive] = useState(false);
  const [fourthCardActive, setFourthCardActive] = useState(false);

  return (
    <PageContainer
      as={motion.div}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* -------------Third Card Container */}
      <FirstCardContainer>
        <Card
          as={motion.div}
          variants={firstCardVariant}
          initial="hidden"
          animate="visible"
        >
          <h3>{data.movieApp.title}</h3>

          <PortfolioContentContainer
            firstCardActive={firstCardActive}
            onClick={() => setFirstCardActive(!firstCardActive)}
          >
            {firstCardActive ? (
              <p>{data.movieApp.desciption}</p>
            ) : (
              <PortfolioImage src={MovieApp} alt="" />
            )}
          </PortfolioContentContainer>

          <PortFolioVisit
            target="_blank"
            href="https://reactoads-movie-app-7c45e.web.app/"
          >
            visit
          </PortFolioVisit>
        </Card>
      </FirstCardContainer>
      {/* -------------Second Card Container */}
      <SecondCardContainer>
        <Card
          as={motion.div}
          variants={secondCardVariant}
          initial="hidden"
          animate="visible"
        >
          <h3>{data.pokePalace.title}</h3>
          <PortfolioContentContainer
            firstCardActive={secondCardActive}
            onClick={() => setSecondCardActive(!secondCardActive)}
          >
            {secondCardActive ? (
              <p>{data.pokePalace.desciption}</p>
            ) : (
              <PortfolioImage src={PokePalace} alt="" />
            )}
          </PortfolioContentContainer>

          <PortFolioVisit
            target="_blank"
            href="https://pokepalace-fa118.web.app/"
          >
            visit
          </PortFolioVisit>
        </Card>
      </SecondCardContainer>
      {/* -------------Third Card Container */}
      <ThirdCardContainer>
        <Card
          as={motion.div}
          variants={thirdCardVariant}
          initial="hidden"
          animate="visible"
        >
          <h3>{data.toadTribune.title}</h3>
          <PortfolioContentContainer
            firstCardActive={thirdCardActive}
            onClick={() => setThirdCardActive(!thirdCardActive)}
          >
            {thirdCardActive ? (
              <p>{data.toadTribune.desciption}</p>
            ) : (
              <PortfolioImage src={ToadTribune} />
            )}
          </PortfolioContentContainer>

          <PortFolioVisit
            target="_blank"
            href="https://the-toad-tribune-659c7.web.app/"
          >
            visit
          </PortFolioVisit>
        </Card>
      </ThirdCardContainer>
      {/* -------------Fourth Card Container */}
      <FourthCardContainer>
        <Card
          as={motion.div}
          variants={fourthCardVariant}
          initial="hidden"
          animate="visible"
        >
          <h3>{data.kovvi.title}</h3>
          <PortfolioContentContainer
            firstCardActive={fourthCardActive}
            onClick={() => setFourthCardActive(!fourthCardActive)}
          >
            {fourthCardActive ? (
              <p>{data.kovvi.desciption}</p>
            ) : (
              <PortfolioImage src={Kovvi} alt="Kovvi app" />
            )}
          </PortfolioContentContainer>

          <PortFolioVisit href="/">visit</PortFolioVisit>
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
