import { Timeline, Text } from "@chakra-ui/react";

type Prop = {
    icon: string;
    title: string;
    date: string;
    description: string;
};

export default function CustomTimelineItem({
    icon,
    title,
    date,
    description,
}: Prop) {
    return (
        <Timeline.Item>
            <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                    <i className={`bx bx-${icon}`} style={{fontSize: 16}} />
                </Timeline.Indicator>
            </Timeline.Connector>

            <Timeline.Content>
                <Timeline.Title>{title}</Timeline.Title>
                {date && <Timeline.Description>{date}</Timeline.Description>}
                {description && <Text textStyle="sm">{description}</Text>}
            </Timeline.Content>
        </Timeline.Item>
    );
}
