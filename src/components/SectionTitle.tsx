import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router";

type Props = {
    key: string;
    title: string;
    description: string;
    mainButtonLabel?: string;
    mainButtonLink?: string;
    otherButtonLabel?: string;
    otherButtonLink?: string;
};

export default function SectionTitle(prop: Props) {
    return (
        <Flex direction="column" align="center">
            <Text
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                lineHeight="short"
                textAlign="center"
            >
                {prop.title}
            </Text>

            <Text
                fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}
                textAlign="center"
            >
                {prop.description}
            </Text>
            {prop.mainButtonLabel && prop.otherButtonLabel ? (
                <HStack marginTop={2}>
                    {}
                    <Button
                        colorPalette="blue"
                        variant="solid"
                        borderRadius={99}
                    >
                        <Link to={prop.mainButtonLink ?? ""} color="white">
                            {prop.mainButtonLabel}
                        </Link>
                    </Button>
                    <Button
                        colorPalette="blue"
                        variant="outline"
                        borderRadius={99}
                    >
                        <Link to={prop.otherButtonLink ?? ""}>
                            {prop.otherButtonLabel}
                        </Link>
                    </Button>
                </HStack>
            ) : null}
        </Flex>
    );
}
