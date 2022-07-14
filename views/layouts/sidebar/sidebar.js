import { Avatar, Box, Heading, VStack, Tag, Accordion } from "@chakra-ui/react";
import { FaChartArea, FaBoxes, FaShoppingCart, FaChartLine, FaUser } from "react-icons/fa";
import {AiFillNotification} from "react-icons/ai";
import SideBarAccordionItem from "./sidebarAccordionItem";
import SideBarButton from "./sidebarButton";
export function SideBar() {
    return (
        <Box width={270} height={"100vh"} position={"sticky"} inset={0} backgroundColor={"blue.900"}>
            <Box paddingY={5} width={"full"} height={"full"} overflowY="scroll">
                <VStack spacing={3}>
                    <Avatar name="Vũ Thế Phong" size={"lg"}></Avatar>
                    <Heading fontSize={"xl"} color={"white"}>Vũ Thế Phong</Heading>
                    <Tag backgroundColor={"green.500"} color={"white"}>Nhân viên</Tag>
                </VStack>
                <VStack align={"flex-start"} marginTop={8}>
                    <SideBarButton href={"/dashboard"} icon={<FaChartArea />}>Dashboard</SideBarButton>
                    <Accordion
                        allowToggle
                        width={"full"}
                        border={"none"}
                        color={"white"}
                        
                    >
                        <SideBarAccordionItem name="Quản lý danh mục" icon={<FaBoxes />}>
                            <SideBarButton href={"/giay"}>Giày</SideBarButton>
                            <SideBarButton href={"/chu-de"}>Chủ đề</SideBarButton>
                            <SideBarButton href={"/thuong-hieu"}>Thương hiệu</SideBarButton>
                            <SideBarButton href={"/mau-sac"}>Màu sắc</SideBarButton>
                            <SideBarButton href={"/nguoi-dung"}>Người dùng</SideBarButton>
                        </SideBarAccordionItem>
                        <SideBarAccordionItem name="Quản lý bán hàng" icon={<FaShoppingCart />}>
                            <SideBarButton href={"/nhap-hang"}>Hoá đơn nhập</SideBarButton>
                            <SideBarButton href={"/don-hang"}>Hoá đơn xuất</SideBarButton>
                        </SideBarAccordionItem>
                        <SideBarAccordionItem name="Báo cáo thống kê" icon={<FaChartLine />}>
                            <SideBarButton href={"/thongke/doanh-thu"}>Báo cáo doanh thu</SideBarButton>
                            <SideBarButton href={"/thongke/ton-kho"}>Báo cáo tồn kho</SideBarButton>
                            <SideBarButton href={"/thongke/hoa-don-nhap"}>Thống kê hoá đơn nhập</SideBarButton>
                            <SideBarButton href={"/thongke/hoa-don-xuat"}>Thống kê hoá đơn xuất</SideBarButton>
                        </SideBarAccordionItem>
                    </Accordion>
                    <SideBarButton href={"/thong-bao"} icon={<AiFillNotification />}>Thông báo</SideBarButton>
                    <SideBarButton href={"/ca-nhan"} icon={<FaUser/>}>Thông tin cá nhân</SideBarButton>
                </VStack>
            </Box>
        </Box>
    )
}