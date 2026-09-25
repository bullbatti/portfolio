import { Timeline, Stack, Flex, Text, Box, VStack } from "@chakra-ui/react";
import SectionTitle from "./components/SectionTitle";
import CustomTimelineItem from "./components/about/CustomTimelineItem";
import { useState, useEffect } from "react";
import type { TimeLineItem } from "./model/timeLineItem";
import Section from "./components/Section";

export default function About() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}/data/timeline.json`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (!data) {
        return null;
    }

    return (
        <Flex direction="column" gap={4}>
            <Stack bg="bg.muted" paddingX={6} paddingY={8}>
                <Box>
                    <Section
                        key="1"
                        id="whoami"
                        title="About me"
                        description="Chaos. Coffee. Code."
                        mainButtonLabel="My journey"
                        mainButtonLink="#my-journey"
                        otherButtonLabel="Projects"
                        otherButtonLink="/portfolio/projects"
                    >
                        <VStack
                            textAlign="justify"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                        >
                            <Text textAlign="justify" marginTop={6}>
                                I’m a .NET Developer Analyst with a deep passion
                                for software development and tech innovation.
                            </Text>
                            <Text textAlign="justify" marginTop={6}>
                                Throughout my career, I’ve contributed to
                                building web applications and management
                                systems, honing my technical skills and
                                problem-solving mindset. I thrive on working on
                                high-impact projects that streamline processes
                                and elevate the user experience.
                            </Text>
                            <Text textAlign="justify" marginTop={6}>
                                I’m a firm believer in continuous learning,
                                collaboration, and knowledge sharing. I’m always
                                ready to step up, embrace new technologies, and
                                actively contribute to the growth of both the
                                project and the team.
                            </Text>
                        </VStack>
                    </Section>
                </Box>
            </Stack>

            <Stack
                bg="bg.muted"
                paddingX={6}
                paddingY={8}
                gap={4}
                id="my-journey"
            >
                <SectionTitle
                    key={"2"}
                    title="My Journey"
                    description="Short but intense"
                />

                <Timeline.Root maxW="400px">
                    {data.map((timelineItem: TimeLineItem) => (
                        <CustomTimelineItem
                            key={timelineItem.key}
                            icon={timelineItem.icon}
                            title={timelineItem.title}
                            date={timelineItem.date}
                            description={timelineItem.description}
                        />
                    ))}
                </Timeline.Root>
            </Stack>
        </Flex>
    );
}
