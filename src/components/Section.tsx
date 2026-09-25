import { AlertTriangle } from "@boxicons/react";
import {
    AspectRatio,
    Image,
    Box,
    Flex,
    Marquee,
    Skeleton,
    Badge,
    VStack,
    Center,
} from "@chakra-ui/react";
import SectionTitle from "./SectionTitle";
import type { Section as SectionType } from "../model/sectionItem";

export default function Section(section: SectionType ) {
    return (
        <AspectRatio
            id={section.id}
            bg="bg.muted"
            ratio={{ base: 9 / 16, md: 4 / 3, xl: 21 / 9}}
            width="100%"
            >
                <Center>
            <Box width="100%" maxWidth="1440px" height="100%" position="relative">
                <Flex
                    direction="column"
                    position="absolute"
                    inset={0}
                    paddingX={6}
                    paddingY={9}
                    gap={4}
                    height="100%"
                    width="100%"
                    overflow="hidden"
                    >
                    <VStack width="100%" align="center" gap={2} flexShrink={0}>
                        <SectionTitle
                        slug={section.slug + "title"}
                            title={section.title}
                            description={section.description}
                            mainButtonLabel={section.mainButtonLabel}
                            mainButtonLink={section.mainButtonLink}
                            otherButtonLabel={section.otherButtonLabel}
                            otherButtonLink={section.otherButtonLink}
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

                        {/* Badge + Marquee per la sezione progetti */}
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
                                            <Marquee.Item>
                                                <Skeleton
                                                    height="200px"
                                                    width="300px"
                                                />
                                            </Marquee.Item>
                                            <Marquee.Item>
                                                <Skeleton
                                                    height="200px"
                                                    width="300px"
                                                />
                                            </Marquee.Item>
                                            <Marquee.Item>
                                                <Skeleton
                                                    height="200px"
                                                    width="300px"
                                                />
                                            </Marquee.Item>
                                            <Marquee.Item>
                                                <Skeleton
                                                    height="200px"
                                                    width="300px"
                                                />
                                            </Marquee.Item>
                                        </Marquee.Content>
                                    </Marquee.Viewport>
                                </Marquee.Root>
                            </VStack>
                        )}

                        {section.children}
                    </Box>
                </Flex>
            </Box>
            </Center>
        </AspectRatio>
    );
}
