import { Box, Flex, Text, Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import ArticleCard from "./articlecard"
import styled, { css, keyframes } from 'styled-components';

const glowing = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`;

const GlowOnHover = styled.button`
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  margin: 21px;

  &:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowing} 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
  }

  &:active {
    color: #000
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  ${props => props.active && css`
    &:before {
      opacity: 1;
    }
  `}
`;

const Choose = () => {
    const [selectedOption, setSelectedOption] = useState("learn");

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <Box
            bgGradient="radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)"
            py={8}
            px={4}
        >
            <Flex justifyContent="center" alignItems="center" mb={4}>
                <GlowOnHover
                    active={selectedOption === "learn"}
                    onClick={() => handleOptionChange("learn")}
                >
                    Learn
                </GlowOnHover>
                <GlowOnHover
                    active={selectedOption === "hire"}
                    onClick={() => handleOptionChange("hire")}
                >
                    Hire
                </GlowOnHover>
            </Flex>
            {selectedOption === "learn" && (
                <Box>
                    <Grid
                        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
                        gap={4}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {/* {Articles.map((article, index) => (
                            <ArticleCard key={index} {...article} />
                        ))} */}
                    </Grid>
                    <Text mt={4}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident
                        velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores
                        delectus quasi inventore debitis quo.
                    </Text>
                </Box>
            )}
        </Box>
    );
};

export default Choose;