import { Flex, Box, Text } from "@chakra-ui/react";
import MenuLinks from "./MenuLinks";
import MobileDrawer from "./MobileDrawer";

export default function Navbar() {
    return (
        <Box position="sticky"
                top={0} left={0} zIndex={100000}
                width="100%" bg="#fff">
            <Flex
                as="nav"
                
                bg="#fff"
                align="center"
                justify="space-between"
                wrap="wrap"
                gap={{ base: 8, lg: 16 }}
                px={{ base: 6, lg: 12 }}
                py={3}
                maxW={{ base: "full", xl: "1440px" }}
                mx="auto"
                
            >
                <Box>
                    <Text fontSize="lg" fontWeight="bold">
                        Andrea Battista
                    </Text>
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
