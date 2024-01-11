import React, { useState, useEffect } from "react";
import api from "../../../utils/api";

import {  Button,  Flex,  Icon,  IconButton,  chakra,  useColorModeValue,  Grid,} from "@chakra-ui/react";
import { AiFillEdit, AiTwotoneLock } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";

const Choc = () => {
  const [quartos, setQuartos] = useState([]);

  const bg = useColorModeValue("red.200", "gray.800");
  const bg2 = useColorModeValue("green.200", "red.500");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/quartos");
        setQuartos(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do servidor JSON:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Flex
      direction="column"
      align="center"
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={4}
    >
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
        gap={4}
        w={{ base: "full", md: "80%" }}
      >


        {quartos.map((token) => (
          <Flex
            key={token.id}
            direction="column"
            bg={token.hospede ? bg2 : bg}
            p={4}
            borderRadius="md"
            boxShadow="lg"
            width={{ base: "100%", md: "100%" }}
            mb={4}
          >
            <chakra.span fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>
              {token.quarto}
            </chakra.span>
            <chakra.span fontWeight="bold">Hospede</chakra.span>
            <span>{token.hospede}</span>

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
