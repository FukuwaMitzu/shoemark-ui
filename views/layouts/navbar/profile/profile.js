import { Avatar, Text, HStack} from "@chakra-ui/react";
export default function Profile() {
    return (
        <HStack>
            <Avatar name="Vũ Thế Phong" size={"sm"}></Avatar>
            <Text fontWeight={"bold"}>Xin chào, Phong!</Text>
        </HStack>
    )
}