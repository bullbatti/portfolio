import { Timeline, Text } from "@chakra-ui/react";
import type { TimeLineItem } from "../../model/timeLineItem";

export default function CustomTimelineItem(timeline: TimeLineItem) {
    return (
        <Timeline.Item>
            <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                    <i className={`bx bx-${timeline.icon}`} style={{fontSize: 16}} />
                </Timeline.Indicator>
            </Timeline.Connector>

            <Timeline.Content>
                <Timeline.Title>{timeline.title}</Timeline.Title>
                {timeline.date && <Timeline.Description>{timeline.date}</Timeline.Description>}
                {timeline.description && <Text textStyle="sm">{timeline.description}</Text>}
            </Timeline.Content>
        </Timeline.Item>
    );
}
