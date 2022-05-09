import React, { useState } from "react";
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
  CarouselImage,
  CarouselWrapper,
  CarouselButton,
  WorkDescription,
  ListWrapper,
  ThemeWrapper,
  ColorExample,
  ColorList,
} from "./workStyles";
import { data, ToadTribuneImages } from "../../assets/data";
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

const TribuneApp = () => {
  const [current, setCurrent] = useState(0);
  let slides = ToadTribuneImages;
  const length = slides.length;

  const nextHandler = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevHandler = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

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
            <h1>{data.toadTribune.title}</h1>
            <PortfolioGithub
              target="_blank"
              href="https://github.com/dannysanchez559/2021_React_Apprenticeship"
            >
              <Github />
            </PortfolioGithub>
          </CarouselTitleContainer>
          <CarouselWrapper>
            <CarouselButton>
              <Previous onClick={prevHandler} />
            </CarouselButton>
            <Carousel>
              {ToadTribuneImages.map((slide, index) => {
                return (
                  <>
                    {index === current && (
                      <CarouselImage src={slide.image} alt="" key={index} />
                    )}
                  </>
                );
              })}
            </Carousel>
            <CarouselButton>
              <Next onClick={nextHandler} />
            </CarouselButton>
          </CarouselWrapper>
        </CarouselContainer>
        {/* -----------------Work Description */}
        <WorkDesContainer>
          <WorkDescription>
            <p>{data.toadTribune.longDescription}</p>
          </WorkDescription>

          <ColumnsContainer>
            <WorkColumns>
              <WorkIconContainer>
                <ToolsIcon />
              </WorkIconContainer>

              <ListWrapper>
                <ListContainer>
                  {data.toadTribune.tech.map((list, index) => (
                    <p key={index}>
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
                {data.toadTribune.typography.map((list, index) => (
                  <li key={index}>{list}</li>
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
                  {data.toadTribune.colors.map((color, index) => {
                    return <ColorExample key={index} colorTheme={color}></ColorExample>;
                  })}
                </ThemeWrapper>
                <ColorList>
                  {data.toadTribune.colors.map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ColorList>
              </ListWrapper>
            </WorkColumns>
          </ColumnsContainer>
        </WorkDesContainer>
      </WorkPageContainer>
    </PageContainer>
  );
};

export default TribuneApp;
