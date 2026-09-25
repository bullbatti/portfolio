import { Stack } from "@chakra-ui/react";
import Section from "../components/Section";
import type { Section as SectionType } from "../model/sectionItem";
import { useJson } from "../hooks/useJson";

export default function Home() {
    const { data, loading, error } = useJson<SectionType>("sections.json");

    if (loading) return <p>Loading…</p>;

    if (error) return <p>Error: {error.message}</p>;

    if (!data) return null;

    return (
        <Stack gap={4} justifyContent="center" alignItems="center">
            {data.map((section: SectionType) => (
                <Section
                    slug={section.slug}
                    id={section.id}
                    title={section.title}
                    description={section.description}
                    isProjectsSection={section.slug === "3"}
                    mainButtonLabel={section.mainButtonLabel}
                    mainButtonLink={section.mainButtonLink}
                    otherButtonLabel={section.otherButtonLabel}
                    otherButtonLink={section.otherButtonLink}
                    imageSrc={`${import.meta.env.BASE_URL}${section.imageSrc}`}
                />
            ))}
        </Stack>
    );
}
