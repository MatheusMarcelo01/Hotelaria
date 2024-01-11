import React from "react";
import {
  Button,  ButtonGroup,  Flex,  Icon,  IconButton,  SimpleGrid,  Stack,  chakra,  useColorModeValue,} from "@chakra-ui/react";
import { AiFillEdit, AiTwotoneLock } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";

const Choc = () => {
  const data = [
    { quarto: "aa", hospede: "João" , data: "11/01/24", noites: "1" },
    { quarto: "Anubra", hospede: "Patricia", data: "11/01/24", noites: "2" },
    { quarto: "Josef", hospede: "Carlos" , data: "11/01/24", noites: "3"},
    { quarto: "Sage", hospede: "Maria" , data: "11/01/24", noites: "2"},
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
    
      <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ md: bg}}
        shadow="lg"
        
      >
        {data.map((token, tid) => {
          return (
            
            <Flex direction={{ base: "row", md: "column" }} bg={bg2} key={tid}>
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 6 }}
                w={{ base: 120, md: "full" }}
                textTransform="uppercase"
                bg={bg3}
                color={"gray.500"}
                py={{ base: 1, md: 4 }}
                px={{ base: 2, md: 3 }}
                fontSize="md"
                fontWeight="hairline"
              >
                <span>Quarto</span>
                <span>Hospede</span>
                <span>Data</span>
                <span>Noites</span>
                <span>Informações</span>
                <chakra.span textAlign={{md: "center" }}>Ações</chakra.span>
                
              </SimpleGrid>
              
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 6 }}
                w="full"
                py={2}
                px={30}
                fontWeight="hairline"
              >
                <span>{token.quarto}</span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {token.hospede}
                </chakra.span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {token.data}
                </chakra.span>
                
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {token.noites}
                </chakra.span>
                

                
                <Flex>
                  <Button
                    size="sm"
                    variant="solid"
                    leftIcon={<Icon as={AiTwotoneLock} />}
                    colorScheme="purple"
                  >
                    Consultar  
                  </Button>


                </Flex>
                <Flex justify={{ md: "end" }}>
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                    <IconButton
                      colorScheme="blue"
                      icon={<BsBoxArrowUpRight />}
                      aria-label="Up"
                    />
                    <IconButton
                      colorScheme="green"
                      icon={<AiFillEdit />}
                      aria-label="Edit"
                    />
                    <IconButton
                      colorScheme="red"
                      icon={<BsFillTrashFill />}
                      aria-label="Delete"
                    />
                  </ButtonGroup>
                </Flex>
              </SimpleGrid>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
  );
};

export default Choc;