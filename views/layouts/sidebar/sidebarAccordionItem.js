import {AccordionButton, AccordionItem, AccordionPanel, AccordionIcon, Box, VStack } from "@chakra-ui/react"
export default function SideBarAccordionItem({icon, name, children }) {
    return (
            <AccordionItem border={"none"}>
                <AccordionButton gap={2} paddingX={3} _hover={{
                    backgroundColor: "blackAlpha.400"
                }}>
                    {icon}
                    <Box flex='1' textAlign='left'>
                        {name}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel padding={"0"}>
                    <VStack>
                        {children}
                    </VStack>
                </AccordionPanel>
            </AccordionItem>
    )
}