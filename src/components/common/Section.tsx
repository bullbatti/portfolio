import type { ReactNode } from "react";
import { AlertTriangle } from "@boxicons/react";
import {
    Image,
    Box,
    Flex,
    Marquee,
    Skeleton,
    Badge,
    VStack,
    Center,
    AspectRatio,
} from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";
import type { SectionData } from "../../types/SectionData";

export interface SectionProps extends SectionData {
    imageSrc?: string;
    isProjectsSection?: boolean;
    children?: ReactNode;
    variableHeight?: boolean;
}

export default function Section(section: SectionProps) {
    const content = (
        <Box
            width="100%"
            maxWidth="1440px"
            height={section.variableHeight ? "auto" : "100%"}
            position="relative"
        >
            <Flex
                direction="column"
                position={section.variableHeight ? "relative" : "absolute"}
                inset={section.variableHeight ? undefined : 0}
                paddingX={6}
                paddingY={9}
                gap={4}
                height={section.variableHeight ? "auto" : "100%"}
                width="100%"
                overflow="hidden"
            >
                <VStack width="100%" align="center" gap={2} flexShrink={0}>
                    <SectionTitle
                        id={section.id}
                        title={section.title}
                        description={section.description}
                        mainButtonLabel={section.mainButtonLabel}
                        mainButtonLink={section.mainButtonLink}
                        mainLinkHash={section.mainLinkHash}
                        otherButtonLabel={section.otherButtonLabel}
                        otherButtonLink={section.otherButtonLink}
                        otherLinkHash={section.otherLinkHash}
                    />
                </VStack>

                <Box
                    width="100%"
                    flexShrink={1}
                    minH={0}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="flex-end"
                >
                    {!section.isProjectsSection && section.imageSrc && (
                        <Image
                            src={section.imageSrc}
                            alt={section.title}
                            width="100%"
                            maxH="100%"
                            objectFit="contain"
                            display="block"
                        />
                    )}

                    {section.isProjectsSection && (
                        <VStack
                            width="100%"
                            align="center"
                            gap={4}
                            marginTop={8}
                        >
                            <Badge
                                variant="solid"
                                colorPalette="yellow"
                                flexShrink={0}
                            >
                                <AlertTriangle />
                                Work in progress
                            </Badge>

                            <Marquee.Root
                                autoFill
                                speed={100}
                                style={{ width: "100%" }}
                            >
                                <Marquee.Viewport>
                                    <Marquee.Content>
                                        {Array.from({ length: 4 }).map(
                                            (_, i) => (
                                                <Marquee.Item key={i}>
                                                    <Skeleton
                                                        height="200px"
                                                        width="300px"
                                                    />
                                                </Marquee.Item>
                                            ),
                                        )}
                                    </Marquee.Content>
                                </Marquee.Viewport>
                            </Marquee.Root>
                        </VStack>
                    )}

                    {section.children}
                </Box>
            </Flex>
        </Box>
    );

    if (section.variableHeight) {
        return (
            <Center id={section.id} bg="bg.muted" width="100%">
                {content}
            </Center>
        );
    }

    return (
        <AspectRatio
            id={section.id}
            bg="bg.muted"
            ratio={{
                base: 9 / 16,
                md: 4 / 3,
                xl: 16 / 9,
                "2xl": 21 / 9,
                "3xl": 32 / 9,
            }}
            width="100%"
        >
            <Center>{content}</Center>
        </AspectRatio>
    );
}
