import { AlertTriangle } from "@boxicons/react";
import {
    AspectRatio,
    Text,
    Image,
    Center,
    Flex,
    Button,
    Link,
    HStack,
    Marquee,
    Skeleton,
    Badge,
} from "@chakra-ui/react";

type Prop = {
    key: string;
    id: string;
    title: string;
    description: string;
    isProjectsSection: boolean;
    mainButtonLabel: string;
    mainButtonLink: string;
    otherButtonLabel: string;
    otherButtonLink: string;
    imageSrc: string;
};

export default function Section(prop: Prop) {
    return (
        <AspectRatio
            id={prop.id}
            bg="bg.muted"
            ratio={{ base: 9 / 16, md: 21 / 9 }}
        >
            <Flex
                direction="column"
                justify="space-between"
                align="center"
                width="100%"
                height="100%"
                padding={6}
                gap={10}
            >
                <Center flexDirection="column">
                    <Text
                        fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
                        fontWeight="bold"
                    >
                        {prop.title}
                    </Text>
                    <Text fontSize={{ base: "lg", md: "xl", lg: "3xl" }}>
                        {prop.description}
                    </Text>
                    <HStack marginTop={2}>
                        <Button colorPalette="blue" variant="solid">
                            <Link href={prop.mainButtonLink} color="white">
                                {prop.mainButtonLabel}
                            </Link>
                        </Button>
                        <Button colorPalette="blue" variant="outline">
                            <Link href={prop.otherButtonLink}>
                                {prop.otherButtonLabel}
                            </Link>
                        </Button>
                    </HStack>
                </Center>
                <Image
                    visibility={prop.isProjectsSection ? "hidden" : "visible"}
                    src={prop.imageSrc}
                    alt={prop.title}
                    maxH="50%" // Impedisce all'immagine di prendere troppo spazio verticale occupando i testi
                    objectFit="contain"
                />

                <Badge
                    variant="solid"
                    colorPalette="yellow"
                    visibility={prop.isProjectsSection ? "visible" : "hidden"}
                >
                    <AlertTriangle />
                    Work in progress
                </Badge>
                <Marquee.Root
                    autoFill
                    visibility={prop.isProjectsSection ? "visible" : "hidden"}
                    speed={100}
                >
                    <Marquee.Viewport>
                        <Marquee.Content>
                            <Marquee.Item>
                                <Skeleton height="200px" width="300px" />
                            </Marquee.Item>

                            <Marquee.Item>
                                <Skeleton height="200px" width="300px" />
                            </Marquee.Item>

                            <Marquee.Item>
                                <Skeleton height="200px" width="300px" />
                            </Marquee.Item>

                            <Marquee.Item>
                                <Skeleton height="200px" width="300px" />
                            </Marquee.Item>
                        </Marquee.Content>
                    </Marquee.Viewport>
                </Marquee.Root>
            </Flex>
        </AspectRatio>
    );
}
