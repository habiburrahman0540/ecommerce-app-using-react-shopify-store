import { Box, Button, Center, Image,Text } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
  return (
    <Box w="100%" h="80vh" position="relative" backgroundColor="#FF9DDF">
        <Image src='https://cdn.shopify.com/s/files/1/0798/3723/3448/files/msi-removebg-preview.png?v=1691064796' h="100%" m="auto" objectPosition={["top","center"]} objectFit="contain" />
        <Text  position="absolute" color="whiteAlpha.800" W="100%" bottom="12%" left="25%" fontSize="6rem" fontWeight="bold" >New MSI Laptop</Text>
        <Center>
            <Button position="absolute" w="10rem" bottom="5%" backgroundColor="#FF31B3" _hover={{opacity:"70%"}} color="#fff">
                Shop Now
            </Button>
        </Center>
    </Box>
  )
}

export default Hero