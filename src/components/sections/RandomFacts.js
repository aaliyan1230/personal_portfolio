import { Box, Heading, List, ListItem, ListIcon, Link } from '@chakra-ui/react';
import CustomHr from './../ui/CustomHr';
import { FaCaretRight } from 'react-icons/fa';

const RandomFacts = (props) => {
  return (
    <Box {...props} px={2} as="section" w="full" textAlign="left">
      <Heading mb="5px" fontSize="1.8rem" fontWeight="800" as="h2">
        Random Facts
      </Heading>

      <CustomHr mb="1.5rem" w="100%" />

      <List fontSize="1.1rem" mt="2rem" textAlign="left" spacing={3}>

        <ListItem>
          <ListIcon color="primary" mb="2px" as={FaCaretRight} />I prefer Reddit
          over other social media
        </ListItem>

        <ListItem>
          <ListIcon color="primary" mb="2px" as={FaCaretRight} />
          My favorite genres are sci-fi and thriller.
        </ListItem>

        <ListItem>
          <ListIcon color="primary" mb="2px" as={FaCaretRight} />I prefer youtube
          over other video content platforms.
        </ListItem>

        <ListItem>
          <ListIcon color="primary" mb="2px" as={FaCaretRight} />
          Pen and Paper are still on of my best tools.
        </ListItem>

      </List>
    </Box>
  );
};

export default RandomFacts;
