export type Section = {
    key: string;
    id?: string;
    title: string;
    description: string;
    mainButtonLabel?: string;
    mainButtonLink?: string;
    otherButtonLabel?: string;
    otherButtonLink?: string;
    imageSrc?: string;
    isProjectsSection?: boolean;
}