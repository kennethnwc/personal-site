import { chakra, Heading, BoxProps, Link, Icon } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

type Props = {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  sourceCode?: string;
};

export const Card: React.FC<BoxProps & Props> = ({
  title,
  description,
  url,
  thumbnail,
  sourceCode,
  ...props
}) => {
  return (
    <chakra.div
      className="card"
      transition="all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)"
      color="white"
      h="18em"
      w="14em"
      display="flex"
      position="relative"
      flexDir="column"
      borderRadius="16px"
      boxShadow="10px 10px 10px #e1e1e3, -10px -10px 10px #ffffff"
      {...props}
    >
      <a href={url}>
        <chakra.div
          borderTopLeftRadius="16px"
          borderTopRightRadius="16px"
          className="card-image"
          _hover={{ height: "18em", zIndex: "2" }}
          height="6em"
          width="14em"
          padding="1em 2em"
          position="absolute"
          top="0"
          backgroundImage={`url('/${thumbnail}')`}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          transition="all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)"
        ></chakra.div>
      </a>
      <chakra.div
        className="card-description"
        // _hover={{ height: "0em", padding: "0px 1em" }}
        height="12em"
        width="14em"
        position="absolute"
        bottom="0em"
        transition="all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)"
        padding="0.5em 1em"
        textAlign="center"
      >
        <Heading fontSize="1xl">{title}</Heading>
        <chakra.p mt="2">{description}</chakra.p>
        {sourceCode && (
          <Link href={sourceCode}>
            Source Code <Icon as={AiFillGithub}></Icon>
          </Link>
        )}
      </chakra.div>
    </chakra.div>
  );
};
