import React from "react";
import { PageContainer } from "../../subComponents/pageContainer";
import {
  WorkPageContainer,
  CarouselContainer,
  CarouselTitleContainer,
  PortfolioGithub,
  WorkDesContainer,
  ColumnsContainer,
  WorkColumns,
  WorkIconContainer,
  ListContainer,
  Carousel,
  CarouselWrapper,
  CarouselButton,
  WorkDescription,
  ListWrapper,
  ThemeWrapper,
  ThemeContainer,
  ColorExample,
} from "./workStyles";
import { data } from "../../assets/data";
import testImage from "../../assets/movieApp.png";
import {
  Github,
  Previous,
  Next,
  ToolsIcon,
  TypoGraphyIcon,
  ColorIcon,
} from "../AllSvgs";
import { motion } from "framer-motion";
import { pageVariant } from "./workVariants";

const MovieApp = () => {
  return (
    <PageContainer
      as={motion.div}
      variants={pageVariant}
      initial="hidden"
      animate="visible"
    >
      <WorkPageContainer>
        {/* -----------------Carousel Container */}
        <CarouselContainer>
          <CarouselTitleContainer>
            <h1>{data.movieApp.title}</h1>
            <PortfolioGithub
              target="_blank"
              href="https://github.com/dannysanchez559/2021_React_Apprenticeship"
            >
              <Github />
            </PortfolioGithub>
          </CarouselTitleContainer>
          <CarouselWrapper>
            <CarouselButton>
              <Previous />
            </CarouselButton>
            <Carousel>
              <img src={testImage} alt="" />
            </Carousel>
            <CarouselButton>
              <Next />
            </CarouselButton>
          </CarouselWrapper>
        </CarouselContainer>
        {/* -----------------Work Description */}
        <WorkDesContainer>
          <WorkDescription>
            <p>{data.movieApp.longDescription}</p>
          </WorkDescription>

          <ColumnsContainer>
            <WorkColumns>
              <WorkIconContainer>
                <ToolsIcon />
              </WorkIconContainer>

              <ListWrapper>
                <ListContainer>
                  {data.movieApp.tech.map((list) => (
                    <p>
                      <li>{list}</li>
                    </p>
                  ))}
                </ListContainer>
              </ListWrapper>
            </WorkColumns>
            {/* ---------------Typography Section */}
            <WorkColumns>
              <WorkIconContainer>
                <TypoGraphyIcon />
              </WorkIconContainer>

              <ListContainer>
                {data.movieApp.typography.map((list) => (
                  <li>{list}</li>
                ))}
              </ListContainer>
            </WorkColumns>
            {/* ---------------------Colors Section */}
            <WorkColumns>
              <WorkIconContainer>
                <ColorIcon />
              </WorkIconContainer>

              <ListWrapper>
                <ThemeWrapper>
                  {data.movieApp.colors.map((color) => {
                    return <ColorExample colorTheme={color}></ColorExample>;
                  })}
                </ThemeWrapper>
                <ListContainer>
                  {data.movieApp.colors.map((list) => (
                    <li>{list}</li>
                  ))}
                </ListContainer>
              </ListWrapper>
            </WorkColumns>
          </ColumnsContainer>
        </WorkDesContainer>
      </WorkPageContainer>
    </PageContainer>
  );
};

export default MovieApp;
