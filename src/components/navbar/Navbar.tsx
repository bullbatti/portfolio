import { Flex, Box, Image } from "@chakra-ui/react";
import MenuLinks from "./MenuLinks";
import MobileDrawer from "./MobileDrawer";
import { Link } from "react-router";

export default function Navbar() {
    return (
        <Box
            position="sticky"
            top={0}
            left={0}
            zIndex={1000}
            width="100%"
            bg="#fff"
        >
            <Flex
                maxW={{ base: "full", xl: "1440px" }}
                mx="auto"
                px={{ base: 6, lg: 12 }}
                py={3}
                justify={{ base: "space-between", md: "center" }}
                align="center"
                gap={8}
                wrap="wrap"
            >
                <Box>
                    <Link to="/">
                        <Image
                            src={`${import.meta.env.BASE_URL}/logo.png`}
                            width="25px"
                        ></Image>
                    </Link>
                </Box>

                {/* Desktop Menu */}
                <Box display={{ base: "none", md: "block" }}>
                    <MenuLinks isMobile={false} />
                </Box>

                {/* Mobile Drawer */}
                <Box display={{ base: "block", md: "none" }}>
                    <MobileDrawer />
                </Box>
            </Flex>
        </Box>
    );
}
