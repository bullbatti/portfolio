import { Stack, Link } from "@chakra-ui/react";

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
            alignItems={isMobile ? "flex-end": "flex-start"}
            gap={8}  
        >
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    fontWeight={isMobile ? "bold" : "medium"}
                    fontSize={isMobile ? "4xl" : "md"}
                    
                    _hover={{
                        textDecoration: "underline",
                    }}
                    transition="color 0.2s ease"
                >
                    {link.name}
                </Link>
            ))}
        </Stack>
    );
}
