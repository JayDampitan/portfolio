import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  FirstCardContainer,
  SecondCardContainer,
  ThirdCardContainer,
  FourthCardContainer,
  PortFolioVisit,
  Square,
  Circle,
  FirstLineContainer,
  FirstPortfolioLine,
  SecondLineContainer,
  ThirdLineContainer,
  SecondPortfolioLine,
  FourthLineContainer,
  FifthLineContainer,
} from "./portfolioStyles";
import { PageContainer } from "../../subComponents/pageContainer";

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
squareColorVariant
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
          <h3>movie app</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            velit autem tenetur quisquam eaque fugiat est nobis officiis
            provident molestias accusamus obcaecati, sit illo quos quam
            voluptatem vero voluptatibus porro.
          </p>
          <PortFolioVisit
            target="_blank"
            to="https://reactoads-movie-app-7c45e.web.app/"
          >
            <h4>visit</h4>
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
          <h3>PokePalace</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            velit autem tenetur quisquam eaque fugiat est nobis officiis
            provident molestias accusamus obcaecati, sit illo quos quam
            voluptatem vero voluptatibus porro.
          </p>
          <PortFolioVisit
            target="_blank"
            to="https://pokepalace-fa118.web.app/"
          >
            <h4>visit</h4>
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
          <h3>toad tribune</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            velit autem tenetur quisquam eaque fugiat est nobis officiis
            provident molestias accusamus obcaecati, sit illo quos quam
            voluptatem vero voluptatibus porro.
          </p>
          <PortFolioVisit
            target="_blank"
            to="https://the-toad-tribune-659c7.web.app/"
          >
            <h4>visit</h4>
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
          <h3>Kovvi</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            velit autem tenetur quisquam eaque fugiat est nobis officiis
            provident molestias accusamus obcaecati, sit illo quos quam
            voluptatem vero voluptatibus porro.
          </p>
          <PortFolioVisit to="">
            <h4>visit</h4>
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
       animate="visible">
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
