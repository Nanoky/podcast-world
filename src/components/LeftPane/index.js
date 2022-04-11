import { Container, Stack } from "react-bootstrap";
import { FriendList } from "../FriendsList";
import { GroupList } from "../GroupsList";
import { LeftPaneHeader } from "../LeftPaneHeader";

export const LeftPane = () => {

    return (
        <Container>
            <Stack gap={5}>
                <LeftPaneHeader />
                <GroupList />
                <FriendList />
            </Stack>
        </Container>
    );
}