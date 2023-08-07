import React, { useContext } from 'react'
import {shopContext} from "../context/shopContext"
import {Link} from "react-router-dom"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Box,
    Grid
  } from "@chakra-ui/react";
const NavMenu = () => {
    const {closeMenu,isMenuOpen} = useContext(shopContext)
    console.log('isMenuOpen',isMenuOpen)
  return (
    <Drawer
    variant="alwaysOpen"
    isOpen={isMenuOpen}
    placement="left"
    onClose={closeMenu}
    trapFocus={false}
    closeOnOverlayClick={false}
    blockScrollOnMount={false}
    
  >
    
    <DrawerContent>
      <DrawerCloseButton backgroundColor="#FFA8E2" />
      <DrawerBody>
      <Box  color="#000" px="3rem" pt="2rem" pb="2rem">
        <Grid templateColumns={["repeat(1,1fr)","repeat(3,1fr)"]} alignItems="center" justifyContent="center">
        <VStack p="2rem" fontWeight="bold">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/">Contact</Link>
        </VStack>
        </Grid>
    </Box>
      </DrawerBody>
  <DrawerFooter>
       
      </DrawerFooter> :
   
    
    </DrawerContent>
  </Drawer>
  )
}

export default NavMenu