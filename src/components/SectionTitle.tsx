import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router";
import type { Section as SectionType } from "../model/sectionItem";

export default function SectionTitle(sectionTitle: SectionType) {
    return (
        <Flex direction="column" align="center">
            <Text
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                lineHeight="short"
                textAlign="center"
            >
                {sectionTitle.title}
            </Text>

            <Text
                fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}
                textAlign="center"
            >
                {sectionTitle.description}
            </Text>
            {sectionTitle.mainButtonLabel && sectionTitle.otherButtonLabel ? (
                <HStack marginTop={2}>
                    {}
                    <Button
                        colorPalette="blue"
                        variant="solid"
                        borderRadius={99}
                    >
                        <Link to={sectionTitle.mainButtonLink ?? ""} color="white">
                            {sectionTitle.mainButtonLabel}
                        </Link>
                    </Button>
                    <Button
                        colorPalette="blue"
                        variant="outline"
                        borderRadius={99}
                    >
                        <Link to={sectionTitle.otherButtonLink ?? ""}>
                            {sectionTitle.otherButtonLabel}
                        </Link>
                    </Button>
                </HStack>
            ) : null}
        </Flex>
    );
}
