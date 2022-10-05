import { Box, Heading } from "@chakra-ui/react";
import CustomHr from "./../ui/CustomHr";
import SkillCategory from "./SkillCategory";

const Skills = (props) => {
  const { skills, ...rest } = props;

  const skillsArray = [];

  for (let category in skills) {
    skillsArray.push(
      <SkillCategory
        key={category}
        category={skills[category]}
        categoryName={category}
      />
    );
  }

  return (
    <Box {...rest} px={2} as="section" w="full" textAlign="left">
      <Heading mb="5px" fontSize="1.8rem" fontWeight="800" as="h2">
        My Skills
      </Heading>

      <CustomHr mb="1.5rem" w="100%" />

      {skillsArray}
    </Box>
  );
};

export default Skills;
