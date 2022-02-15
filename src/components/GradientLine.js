import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BorderLine = styled.div`
    background-image: linear-gradient( to right, yellow, red) ;
    height: 3px;
`

const gradientVariant = {
    hidden: {
        x: '-200vw'
    },
    visible: {
        x: 0,
        transition: {
            duration: 2,
        }
    }

}


const GradientLine = () => {
  return (
    <BorderLine as={motion.div} 
        variants={gradientVariant}
        initial='hidden'
        animate='visible'
    />
  )
}

export default GradientLine;