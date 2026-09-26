import { Github, Linkedin } from "@boxicons/react";
import { Stack, HStack } from "@chakra-ui/react";
import { Link } from "react-router";
import { useJson } from "../../hooks/useJson";
import type { MenuLink } from "../../model/menuLink";
import "./MenuLinks.css";

type Prop = {
    isMobile: boolean;
};

export default function MenuLinks({ isMobile }: Prop) {
    const { data, loading, error } = useJson<MenuLink>("links.json");

    if (loading) return <p>Loading…</p>;

    if (error) return <p>Error: {error.message}</p>;

    if (!data) return null;

    return (
        <Stack
            marginTop={isMobile ? "8" : "0"}
            direction={isMobile ? "column" : "row"}
            alignItems={isMobile ? "flex-end" : "flex-start"}
            gap={isMobile ? 12 : 8}
        >
            {data.map((link: MenuLink) => (
                <Link
                    key={link.id}
                    to={link.href}
                    className={isMobile ? "drawer-link" : ""}
                >
                    {link.name}
                </Link>
            ))}

            <HStack gap={{ base: "4", md: "8" }}>
                <Link to="https://github.com/bullbatti" target="_blank">
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
