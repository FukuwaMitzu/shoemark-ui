import { SideBar } from "./sidebar/sidebar";
import {HStack, Box} from "@chakra-ui/react";
import Navbar from "./navbar/navbar";
export function MasterLayout({children}){
    return (
        <HStack alignItems={"flex-start"}>
            <SideBar></SideBar>
            <Box flex={1}>
                <Navbar></Navbar>
                <Box>{children}</Box>
            </Box>
        </HStack>
    )
}