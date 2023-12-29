import { Box, Flex, Text, Grid } from "@chakra-ui/react";
import React, { useState } from "react";
import ArticleCard from "./articlecard"

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
                <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="white"
                    mr={4}
                    cursor="pointer"
                    onClick={() => handleOptionChange("learn")}
                    textDecoration={selectedOption === "learn" ? "underline" : "none"}
                >
                    Learn
                </Text>
                <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="white"
                    cursor="pointer"
                    onClick={() => handleOptionChange("hire")}
                    textDecoration={selectedOption === "hire" ? "underline" : "none"}
                >
                    Hire
                </Text>
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
