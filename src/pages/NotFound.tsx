import Section from "../components/common/Section";

export default function NotFound() {
    return (
        <Section
            id="whoami"
            title="Page not found"
            description="Maybe this is another bug on my end."
            mainButtonLabel="Back to home"
            mainButtonLink="/"
            imageSrc="assets/not-found.png"
            variableHeight={false}
        />
    );
}
