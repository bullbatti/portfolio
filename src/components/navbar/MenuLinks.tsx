import { Github, Linkedin } from "@boxicons/react";
import { Stack, Link, HStack } from "@chakra-ui/react";

const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
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
                    href={link.href}
                    fontWeight={isMobile ? "bold" : "medium"}
                    fontSize={isMobile ? "4xl" : "md"}
                >
                    {link.name}
                </Link>
            ))}

            <HStack gap={{base: "0", md: "8"}}>
                <Link
                    href="https://github.com/bullbatti"
                    target="_blank"
                    display="flex"
                    alignItems="center"
                >
                    <Github />
                </Link>

                <Link
                    href="https://it.linkedin.com/in/battista-andrea"
                    target="_blank"
                    display="flex"
                    alignItems="center"
                >
                    <Linkedin />
                </Link>
            </HStack>
        </Stack>
    );
}
