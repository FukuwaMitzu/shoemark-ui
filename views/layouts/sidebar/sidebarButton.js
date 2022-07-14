import {Text, Box} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function SideBarButton({href, icon, children}){
    const [isActive, setActive] = useState(false);
    const router = useRouter();

    useEffect(()=>{
        if(router.pathname.startsWith(href)){
            setActive(true);
        }else setActive(false);
    }, [router.pathname]);

    
    return (
        <NextLink href={href}>
            <Box
                align={"center"} 
                display={"flex"} 
                alignItems={"center"} 
                gap={2} 
                color={
                    "white"
                } 
                backgroundColor={
                    isActive? "blue.600": "none"
                }
                paddingX={3} 
                paddingY={2}  
                transition={"all 200ms"}
                _hover={
                    {
                        backgroundColor: isActive? "" : "blackAlpha.400", 
                        cursor:"pointer"
                    }
                } 
                width="full"
            >
                {icon}
                <Text fontSize={"md"} >{children}</Text>
            </Box>
        </NextLink>
        
    )
}