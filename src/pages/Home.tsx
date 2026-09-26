import { Stack } from "@chakra-ui/react";
import Section, { type SectionProps } from "../components/common/Section";
import { useJson } from "../hooks/useJson";

export default function Home() {
    const { data, loading, error } = useJson<SectionProps>("sections.json");

    if (loading) return <p>Loading…</p>;

    if (error) return <p>Error: {error.message}</p>;

    if (!data) return null;

    return (
        <Stack gap={4} justifyContent="center" alignItems="center">
            {data.map((section: SectionProps, index: number) => (
                <Section
                    key={`${section.id}-${index}`}
                    id={section.id}
                    title={section.title}
                    description={section.description}
                    isProjectsSection={section.id === "projects"}
                    mainButtonLabel={section.mainButtonLabel}
                    mainButtonLink={section.mainButtonLink}
                    mainLinkHash={section.mainLinkHash}
                    otherButtonLabel={section.otherButtonLabel}
                    otherButtonLink={section.otherButtonLink}
                    otherLinkHash={section.otherLinkHash}
                    imageSrc={`${import.meta.env.BASE_URL}${section.imageSrc}`}
                    variableHeight={false}
                />
            ))}
        </Stack>
    );
}
