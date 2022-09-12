import React, { useEffect, useState } from 'react';
import { Flex, Heading, useClipboard, useToast, Text } from '@chakra-ui/react';
import Introduction from '../sections/Introduction';
import Photo from '../ui/Photo';
import RandomFacts from '../sections/RandomFacts';
import Skills from '../sections/Skills';
import Footer from '../sections/Footer';
import skills from './../../assets/skills/skillsData';

const About = () => {
  useEffect(() => {
    document.title = 'About Muhammad Aaliyan';
  }, []);

  return (
    <>
      <Flex mb="4rem" direction="row" w="100%" justify="center" as="main">
        <Flex
          className="container"
          direction="column"
          w={{ base: '90%', lg: '80%', xl: '1040px' }}
          align="center"
        >
          <Heading
            mt="2rem"
            fontWeight="900"
            fontSize={{ base: '4xl' }}
            as="h1"
          >
            About{' '}
            <Text color="primary" as="span">
              Me
            </Text>
          </Heading>

          <Photo mt="1.5rem" />

          <Introduction  />

          <Skills skills={skills} mt="4rem" />

          <RandomFacts mt="1.5rem" />
        </Flex>
      </Flex>

      <Footer />
    </>
  );
};

export default About;
