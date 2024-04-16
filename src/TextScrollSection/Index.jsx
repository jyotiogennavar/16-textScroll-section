import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

const phrases = [
  "Invest in systems that",
  "can help you scale your",
  "business and make it more ",
  "efficient in the long run.",
];

  

const Index = () => {
  return (
    <Wrapper>
    <Space>Content here</Space>
      <Container>
      <MaskText />
    </Container>
    <Space>Content here</Space>
    </Wrapper>
  
  );
};

const Wrapper = styled.div`
font-family: "Montserrat", sans-serif;
`

const Container = styled.div`
  
  background-image: url('https://images.pexels.com/photos/3671142/pexels-photo-3671142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  
    /* Overlay */
    &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(46, 46, 46, 0.6); /* Adjust the opacity as needed */
    
  }

   display: flex;
  align-items: start;
  flex-direction: column;
  padding: 5rem 0 5rem 6rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  
  }
  

`;

const Space = styled.div`
  height: 50rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  background-color: #202020;

  @media (max-width: 768px) {
    height: 30rem;
    font-size: 2rem;
  
  }
`

export function MaskText() {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {phrases.map((phrase, index) => {
        return (
          <Phrase key={index}>
            <PhraseText
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : "initial"}
            >
              {phrase}
            </PhraseText>
          </Phrase>
        );
      })}
    </div>
  );
}



const Phrase = styled(motion.div)`
  overflow: hidden;
`;

const PhraseText = styled(motion.p)`
  margin: 0px;
  font-weight: 700;
  color: #fff; 
  font-size: 6vh;
  line-height: 1.2;
`;

export default Index;

// img link - https://images.pexels.com/photos/3671142/pexels-photo-3671142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
