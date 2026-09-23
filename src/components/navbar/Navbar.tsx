import { Flex, Box, Image, Link } from "@chakra-ui/react";
import MenuLinks from "./MenuLinks";
import MobileDrawer from "./MobileDrawer";

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
                as="nav"
                gap={8}
                bg="#fff"
                align="center"
                justify={{ base: "space-between", md: "center" }}
                wrap="wrap"
                px={{ base: 6, lg: 12 }}
                py={3}
                maxW={{ base: "full", xl: "1440px" }}
                mx="auto"
            >
                <Box>
                    <Link href="/portfolio#home" style={{display: "flex", alignItems: "center"}} >
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
