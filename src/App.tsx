import { Stack } from "@chakra-ui/react";
import Section from "./components/Section";
import { useEffect, useState } from "react";
import type { Section as SectionType } from "./model/sectionItem";

export default function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}/data/sections.json`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    if (!data) {
        return null;
    }

    return (
        <>
            <Stack gap={4}>
                {data.map((section: SectionType) => (
                    <Section
                        key={section.key}
                        id={section.id}
                        title={section.title}
                        description={section.description}
                        isProjectsSection={section.key === "3"}
                        mainButtonLabel={section.mainButtonLabel}
                        mainButtonLink={section.mainButtonLink}
                        otherButtonLabel={section.otherButtonLabel}
                        otherButtonLink={section.otherButtonLink}
                        imageSrc={`${import.meta.env.BASE_URL}${section.imageSrc}`}
                    />
                ))}
            </Stack>
        </>
    );
}
