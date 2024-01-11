import React from "react";
import {
  Button,
  Flex,
  Icon,
  IconButton,
  chakra,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import { AiFillEdit, AiTwotoneLock } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";

const Choc = () => {
  const data = [
    { quarto: "aa", hospede: "João", data: "11/01/24", noites: "1" },
    { quarto: "Anubra", hospede: "Patricia", data: "11/01/24", noites: "2" },
    { quarto: "Josef", hospede: "Carlos", data: "11/01/24", noites: "3" },
    { quarto: "Sage", hospede: "Maria", data: "11/01/24", noites: "2" },
  ];

  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("green.200", "gray.800");
  const bg3 = useColorModeValue("white", "gray.700");

  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        templateColumns="repeat(10, 1fr)"
        gap={4}
        w={{ base: "full", md: "80%" }}
      >
        {data.map((token, tid) => (
          <Flex
            direction="column"
            bg={bg2}
            key={tid}
            p={10}
            borderRadius="md"
            boxShadow="lg"
            width="100%" // Ajuste a largura
            height="80%" // Ajuste a altura


          >
            <chakra.span fontWeight="bold">Quarto</chakra.span>
            <span>{token.quarto}</span>
            <chakra.span fontWeight="bold">Hospede</chakra.span>
            <chakra.span
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {token.hospede}
            </chakra.span>
            <chakra.span fontWeight="bold">Data</chakra.span>
            <chakra.span
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {token.data}
            </chakra.span>
            <chakra.span fontWeight="bold">Noites</chakra.span>
            <chakra.span
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {token.noites}
            </chakra.span>

            <Button
              size="sm"
              variant="solid"
              leftIcon={<Icon as={AiTwotoneLock} />}
              colorScheme="purple"
              mt={2}
            >
              Consultar
            </Button>

            <Flex justify="flex-end" mt={2}>
              <IconButton
                colorScheme="blue"
                icon={<BsBoxArrowUpRight />}
                aria-label="Up"
                mr={2}
              />
              <IconButton
                colorScheme="green"
                icon={<AiFillEdit />}
                aria-label="Edit"
                mr={2}
              />
              <IconButton
                colorScheme="red"
                icon={<BsFillTrashFill />}
                aria-label="Delete"
              />
            </Flex>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default Choc;
