import { Icon, IconButton, Link, Stack } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = (props) => {
  const style = {
    color: "gray.700",
    hoverColor: "primary",
  };

  return (
    <Stack {...props}>
      <IconButton
        color={style.color}
        _hover={{ color: style.hoverColor }}
        href="mailto:aaliyan1230@gmail.com"
        size="lg"
        variant="link"
        as={Link}
        icon={<Icon boxSize={6} as={FaEnvelope} />}
      />
      <IconButton
        color={style.color}
        _hover={{ color: style.hoverColor }}
        href="https://github.com/aaliyan1230"
        isExternal
        size="lg"
        variant="link"
        as={Link}
        icon={<Icon boxSize={6} as={FaGithub} />}
      />
      <IconButton
        color={style.color}
        _hover={{ color: style.hoverColor }}
        href="https://www.linkedin.com/in/muhammad-aaliyan-8a031b209"
        isExternal
        size="lg"
        variant="link"
        as={Link}
        icon={<Icon boxSize={6} as={FaLinkedin} />}
      />
    </Stack>
  );
};

export default SocialMedia;
