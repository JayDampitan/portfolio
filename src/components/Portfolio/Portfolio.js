import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  PortfolioTitleContainer,
  PortfolioGithub,
  PortfolioContentContainer,
  PortfolioButtonContainer,
  PortfolioTech,
  PortfolioImage,
  FirstCardContainer,
  SecondCardContainer,
  ThirdCardContainer,
  FourthCardContainer,
  PortFolioVisit,
  // background elements
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
import MovieApp from "../../assets/movieApp1.png";
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
import { Github } from "../AllSvgs";

const Portfolio = () => {
  const [firstCardActive, setFirstCardActive] = useState(false);
  const [secondCardActive, setSecondCardActive] = useState(false);
  const [thirdCardActive, setThirdCardActive] = useState(false);
  const [fourthCardActive, setFourthCardActive] = useState(false);

  return (
    <PageContainer
      as={motion.div}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* -------------Third Card Container */}
      <FirstCardContainer>
        <Card
          as={motion.div}
          variants={firstCardVariant}
          initial="hidden"
          animate="visible"
        >
          <PortfolioTitleContainer>
            <h3>{data.movieApp.title}</h3>
            <PortfolioGithub
              target="_blank"
              href="https://github.com/dannysanchez559/2021_React_Apprenticeship"
            >
              <Github />
            </PortfolioGithub>
          </PortfolioTitleContainer>

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

          <PortfolioButtonContainer>
            <PortFolioVisit
              target="_blank"
              href="https://reactoads-movie-app-7c45e.web.app/"
            >
              visit
            </PortFolioVisit>

            <PortfolioTech>
              <p>-React</p>
              <p>-Firebase</p>
            </PortfolioTech>
          </PortfolioButtonContainer>
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
          <PortfolioTitleContainer>
            <h3>{data.pokePalace.title}</h3>
            <PortfolioGithub
              target="_blank"
              href="https://github.com/gonzalespaulb/Pokemon-App"
            >
              <Github />
            </PortfolioGithub>
          </PortfolioTitleContainer>

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

          <PortfolioButtonContainer>
            <PortFolioVisit
              target="_blank"
              href="https://pokepalace-fa118.web.app/"
            >
              visit
            </PortFolioVisit>
            <PortfolioTech>
              <p>
                <span>-React</span>
                <span>-SCSS</span>
              </p>
              <p>
                <span>-RTK</span>
                <span>-Firebase</span>
              </p>
            </PortfolioTech>
          </PortfolioButtonContainer>
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
          <PortfolioTitleContainer>
            <h3>{data.toadTribune.title}</h3>
            <PortfolioGithub
              target="_blank"
              href="https://github.com/JayDampitan/news-app"
            >
              <Github />
            </PortfolioGithub>
          </PortfolioTitleContainer>

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

          <PortfolioButtonContainer>
            <PortFolioVisit
              target="_blank"
              href="https://the-toad-tribune-659c7.web.app/"
            >
              visit
            </PortFolioVisit>

            <PortfolioTech>
              <p>
                <span>-React</span>
                <span>-Typescript</span>
              </p>
              <p>
                <span>-Redux</span>
                <span>-Styled Components</span>
              </p>
            </PortfolioTech>
          </PortfolioButtonContainer>
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
          <PortfolioTitleContainer>
            <h3>{data.kovvi.title}</h3>
            <PortfolioGithub href="">
              <Github />
            </PortfolioGithub>
          </PortfolioTitleContainer>

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

          <PortfolioButtonContainer>
          <PortFolioVisit href="/">visit</PortFolioVisit>

            <PortfolioTech>
              <p>
                <span>-React Native</span>
                <span>-Redux</span>
              </p>
              <p>
                <span>-Expo</span>
                <span>-Styled Components</span>
              </p>
            </PortfolioTech>
          </PortfolioButtonContainer>

         
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
