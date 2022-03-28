import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Card,
  FirstCardContainer,
  SecondCardContainer,
  ThirdCardContainer,
  FourthCardContainer,
  PortFolioVisit,
} from "./portfolioStyles";
import { PageContainer } from "../../subComponents/pageContainer";

// // -------------About Page Variants

// const portfolioVariants = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

const Portfolio = () => {
  return (
    <PageContainer>
      {/* ----- First Card ----- */}
      <FirstCardContainer>
        <Card>
          <h3>movie app</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            velit autem tenetur quisquam eaque fugiat est nobis officiis
            provident molestias accusamus obcaecati, sit illo quos quam
            voluptatem vero voluptatibus porro.
          </p>
          <PortFolioVisit target='_blank' to="https://reactoads-movie-app-7c45e.web.app/">
            <h4>visit</h4>
          </PortFolioVisit>
        </Card>
      </FirstCardContainer>

      <SecondCardContainer>
        <Card>
          <h3>PokePalace</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            velit autem tenetur quisquam eaque fugiat est nobis officiis
            provident molestias accusamus obcaecati, sit illo quos quam
            voluptatem vero voluptatibus porro.
          </p>
          <PortFolioVisit target='_blank' to="https://pokepalace-fa118.web.app/">
            <h4>visit</h4>
          </PortFolioVisit>
        </Card>
      </SecondCardContainer>

      <ThirdCardContainer>
        <Card>
          <h3>PokePalace</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            velit autem tenetur quisquam eaque fugiat est nobis officiis
            provident molestias accusamus obcaecati, sit illo quos quam
            voluptatem vero voluptatibus porro.
          </p>
          <PortFolioVisit target='_blank' to="https://the-toad-tribune-659c7.web.app/">
            <h4>visit</h4>
          </PortFolioVisit>
        </Card>
      </ThirdCardContainer>

      <FourthCardContainer>
        <Card>
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
    </PageContainer>
  );
};

export default Portfolio;
