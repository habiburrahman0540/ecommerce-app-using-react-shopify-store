import { Box, Grid,Image, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <Box backgroundColor="#ffa8e2" color="#fff" px="3rem" pt="2rem" pb="2rem">
        <Grid templateColumns={["repeat(1,1fr)","repeat(3,1fr)"]} alignItems="center" justifyContent="center">
        <Link to="/">
          <Image src='https://th.bing.com/th/id/R.8b4b6b48059f74d383f55d2eab8deff0?rik=rEPgOFe8CBlZGA&riu=http%3a%2f%2fdemo.org.pk%2fwp-content%2fuploads%2f2018%2f08%2fdemo-logo-new1-e1533117947557.png&ehk=a0qHJaWGUZFuLHSlvqd1gfIoGeB4pJXjpGjjvKakZ1k%3d&risl=&pid=ImgRaw&r=0' w={100} h={100}/>
        </Link>
        <VStack p="2rem" fontWeight="bold">
            <Link to="/">Home</Link>
            <Link to="/">Product</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Contact</Link>
        </VStack>
        <VStack p="2rem" fontWeight="bold">
           <Text>&copy; Copyright 2023,Designed and Develop by Habibur Rahman</Text>
        </VStack>
        </Grid>
    </Box>
  )
}

export default Footer