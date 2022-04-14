import { Container, Stack } from "react-bootstrap";
import { FriendList } from "../FriendsList";
import { GroupList } from "../GroupsList";
import { LeftPaneHeader } from "../LeftPaneHeader";
import "./index.scss";

export const LeftPane = () => {

    return (
        <Container fluid className="pane h-100 overflow-auto">
            <Stack gap={5}>
                <LeftPaneHeader />
                <GroupList />
                <FriendList />
            </Stack>
        </Container>
    );
}