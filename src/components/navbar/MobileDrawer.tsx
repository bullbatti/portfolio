import { useDisclosure, Drawer, Portal, CloseButton } from "@chakra-ui/react";
import MenuLinks from "./MenuLinks";
import { Menu } from "@boxicons/react";

export default function MobileDrawer() {
    const { open, onToggle } = useDisclosure();

    return (
        <Drawer.Root open={open} onOpenChange={onToggle} size="xs">
            <Drawer.Trigger asChild>
                <Menu cursor="pointer" />
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Drawer.Title></Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>
                            <MenuLinks isMobile={true} />
                        </Drawer.Body>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="md" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    );
}
