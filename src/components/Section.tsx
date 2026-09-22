import { AlertTriangle } from "@boxicons/react";
import {
    AspectRatio,
    Text,
    Image,
    Box,
    Flex,
    Button,
    Link,
    HStack,
    Marquee,
    Skeleton,
    Badge,
    VStack,
    Spacer,
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
    width="100%"
>
    <Box width="100%" height="100%" position="relative">
        <Flex
            direction="column"
            position="absolute"
            inset={0}
            padding={6}
            height="100%"
            width="100%"
            overflow="hidden" // Impedisce a elementi macroscopici di rompere il layout durante il resize
        >
            {/* ================= BLOCCO ALTO ================= */}
            {/* flexShrink={0} assicura che i testi e i bottoni NON si rimpiccioliscano mai, mantenendo la loro leggibilità */}
            <VStack width="100%" align="center" textAlign="center" gap={2} flexShrink={0}>
                <Text
                    fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
                    fontWeight="bold"
                    lineHeight="short"
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
            </VStack>

            {/* ================= SPAZIATORE ================= */}
            <Spacer />

            {/* ================= BLOCCO BASSO ================= */}
            {/* flexShrink={1} e minH={0} dicono al CSS che questa sezione è l'unica autorizzata a rimpicciolirsi se lo schermo diventa troppo piccolo */}
            <Box width="100%" flexShrink={1} minH={0} display="flex" flexDirection="column" alignItems="center" justifyContent="flex-end">
                
                {/* Immagine fluida */}
                {!prop.isProjectsSection && prop.imageSrc && (
                    <Image
                        src={prop.imageSrc}
                        alt={prop.title}
                        width="100%"
                        // maxH="100%" dice all'immagine di non superare mai l'altezza del Box contenitore (che a sua volta rispetta l'altezza dell'AspectRatio)
                        maxH="100%" 
                        objectFit="contain"
                        display="block"
                    />
                )}

                {/* Badge + Marquee per la sezione progetti */}
                {prop.isProjectsSection && (
                    <VStack width="100%" align="center" gap={4}>
                        <Badge variant="solid" colorPalette="yellow" flexShrink={0}>
                            <AlertTriangle />
                            Work in progress
                        </Badge>
                        
                        <Marquee.Root autoFill speed={100} style={{ width: "100%" }}>
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
                    </VStack>
                )}
            </Box>
        </Flex>
    </Box>
</AspectRatio>
    );
}
