import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router";
import type { SectionData } from "../../types/SectionData";

export type SectionTitleProps = SectionData;

export default function SectionTitle(sectionTitle: SectionTitleProps) {
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
            {sectionTitle.mainButtonLabel || sectionTitle.otherButtonLabel ? (
                <HStack marginTop={2}>
                    {sectionTitle.mainButtonLabel ? (
                        <Link
                            to={{pathname: sectionTitle.mainButtonLink ?? "", hash: sectionTitle.mainLinkHash ?? ""}}
                            color="white"
                        >
                            <Button
                                colorPalette="blue"
                                variant="solid"
                                borderRadius={99}
                            >
                                {sectionTitle.mainButtonLabel}
                            </Button>
                        </Link>
                    ) : null}

                    {sectionTitle.otherButtonLabel ? (
                        <Link to={{pathname: sectionTitle.otherButtonLink ?? "", hash: sectionTitle.otherLinkHash ?? ""}}>
                            <Button
                                colorPalette="blue"
                                variant="outline"
                                borderRadius={99}
                            >
                                {sectionTitle.otherButtonLabel}
                            </Button>
                        </Link>
                    ) : null}
                </HStack>
            ) : null}
        </Flex>
    );
}
