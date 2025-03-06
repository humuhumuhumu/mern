import { Container, Flex, Text, Link, HStack, Button} from '@chakra-ui/react'
import React from 'react'
import { FaRegPlusSquare } from "react-icons/fa";
import { useColorMode } from './ui/color-mode';
import { LuMoon, LuSun } from "react-icons/lu"

const Navbar = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Container maxW={"1140px"} px={4} >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base:"column",
          sm:"row"
        }}
        >
          <Text
            fontSize={{base: "20px", sm: "28px"}}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500"
            bgClip={"text"}
          >
            <Link href={"/"}>Product Store 🛒</Link>
          </Text>

          <HStack spacing={2} alignItems={"center"}>
            <Link href={"/create"}>
              <Button>
                <FaRegPlusSquare fontSize={20}></FaRegPlusSquare>
              </Button>
            </Link>
            <Button onClick={toggleColorMode}>
              <LuSun /><LuMoon />
            </Button>
          </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar