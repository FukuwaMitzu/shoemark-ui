import { HStack } from "@chakra-ui/react"
import Profile from "./profile/profile"
import Notification from "./notification/notification";
export default function Navbar({children}){
    return (
        <HStack>
            <Notification></Notification>
            <Profile></Profile>
        </HStack>
    )
}