import { Stack } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/Section";
import { useEffect, useState } from "react";

type Prop = {
    key: string;
    id: string;
    title: string;
    description: string;
    mainButtonLabel: string;
    mainButtonLink: string;
    otherButtonLabel: string;
    otherButtonLink: string;
    imageSrc: string;
};

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
            <Navbar />
            <Stack gap={4}>
                {data.map((section: Prop) => (
                    <Section
                        key={section.key}
                        id={section.id}
                        title={section.title}
                        description={section.description}
                        mainButtonLabel={section.mainButtonLabel}
                        mainButtonLink={section.mainButtonLink}
                        otherButtonLabel={section.otherButtonLabel}
                        otherButtonLink={section.otherButtonLink}
                        imageSrc={`${import.meta.env.BASE_URL}${section.imageSrc}`}
                    />
                ))}

                {/* <Section id='about' title='Andrea Battista' description='Full-stack web developer' imageSrc='src/assets/hero.png' />
      <Section id='projects' title='Andrea Battista' description='Full-stack web developer' imageSrc='src/assets/hero.png' />
      <Section id='contact' title='Andrea Battista' description='Full-stack web developer' imageSrc='src/assets/hero.png' /> */}
            </Stack>
        </>
    );
}
