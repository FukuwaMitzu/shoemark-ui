import { FaBell } from "react-icons/fa";
import { Heading, Box, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverHeader, PopoverBody, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

export default function Notification() {
    const [isRead, setRead] = useState(true);

    return (
        <Popover>
            <PopoverTrigger>
                <Button variant={"ghost"}>
                    <Box position={"absolute"} top={2} right={3} rounded="full" padding={1} backgroundColor={
                        isRead ? "" : "red.500"
                    }></Box>
                    <FaBell />
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>
                    <Flex>
                        <Heading flex={1} size={"md"}>Thông báo</Heading>
                        <Button colorScheme={"blue"} variant={"link"}>Xem tất cả</Button>
                    </Flex>
                </PopoverHeader>
                <PopoverBody>
                    Are you sure you want to have that milkshake?
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}