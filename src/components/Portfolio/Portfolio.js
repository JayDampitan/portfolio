import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  PortfolioTitleContainer,
  PortfolioGithub,
  PortfolioContentContainer,
  PortfolioButtonContainer,
  PortfolioImage,
  FirstCardContainer,
  SecondCardContainer,
  ThirdCardContainer,
  FourthCardContainer,
  PortFolioVisit,
  MoreButton,
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
import MovieApp from "../../assets/images/movieApp.png";
import PokePalace from "../../assets/images/pokePalace.png";
import ToadTribune from "../../assets/images/toadTribune.png";
import Kovvi from "../../assets/images/kovviShot.png";

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
      {/* -------------First Card Container */}
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
              <>
                <p>{data.movieApp.desciption}</p>
              </>
            ) : (
              <PortfolioImage src={MovieApp} alt="images of the project" />
            )}
          </PortfolioContentContainer>
          <PortfolioButtonContainer>
            <PortFolioVisit
              target="_blank"
              href="https://reactoads-movie-app-7c45e.web.app/"
            >
              visit
            </PortFolioVisit>
            <MoreButton to="/movieApp">more</MoreButton>
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
              <>
                <p>{data.pokePalace.desciption}</p>
              </>
            ) : (
              <PortfolioImage src={PokePalace} alt="image of the application" />
            )}
          </PortfolioContentContainer>
          <PortfolioButtonContainer>
            <PortFolioVisit
              target="_blank"
              href="https://pokepalace-fa118.web.app/"
            >
              <p>visit</p>
            </PortFolioVisit>
            <MoreButton to="/pokeApp">more</MoreButton>
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
              <>
                <p>{data.toadTribune.desciption}</p>
              </>
            ) : (
              <PortfolioImage src={ToadTribune} />
            )}
          </PortfolioContentContainer>
          <PortfolioButtonContainer>
            <PortFolioVisit
              target="_blank"
              href="https://the-toad-tribune-659c7.web.app/"
            >
              <p>visit</p>
            </PortFolioVisit>
            <MoreButton to="/tribuneApp">more</MoreButton>
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
              <>
                <p>{data.kovvi.desciption}</p>
              </>
            ) : (
              <PortfolioImage src={Kovvi} alt="Kovvi app" />
            )}
          </PortfolioContentContainer>
          <PortfolioButtonContainer>
            <PortFolioVisit href="/">visit</PortFolioVisit>

            <MoreButton to="/kovviApp">more</MoreButton>
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
        <Circle
          as={motion.div}
          variants={squareColorVariant}
          initial="hidden"
          animate="visible"
        />
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
        <Square />
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
