import { Github, Linkedin } from "@boxicons/react";
import { Stack, HStack } from "@chakra-ui/react";
import { Link } from "react-router";

const links = [
    { name: "Home", href: "/portfolio" },
    { name: "About", href: "/portfolio/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "#contact" },
];

type Props = {
    isMobile: boolean;
};

export default function MenuLinks({ isMobile }: Props) {
    return (
        <Stack
            marginTop={isMobile ? "8" : "0"}
            direction={isMobile ? "column" : "row"}
            alignItems={isMobile ? "flex-end" : "flex-start"}
            gap={8}
        >
            {links.map((link) => (
                <Link
                    key={link.name}
                    to={link.href}
                    style={{fontWeight: isMobile ? "bold" : "medium", fontSize: isMobile ? "4xl" : "md", outline: "none"}}
                    
                    
                >
                    {link.name}
                </Link>
            ))}

            <HStack gap={{ base: "4", md: "8" }}>
                <Link
                    to="https://github.com/bullbatti"
                    target="_blank"
                >
                    <Github size={isMobile ? "lg" : undefined} />
                </Link>

                <Link
                    to="https://it.linkedin.com/in/battista-andrea"
                    target="_blank"
                >
                    <Linkedin size={isMobile ? "lg" : undefined} />
                </Link>
            </HStack>
        </Stack>
    );
}
