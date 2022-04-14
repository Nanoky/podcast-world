import { Container, ListGroup, ListGroupItem, Row, Stack } from "react-bootstrap";
import avatar from "../../assets/images/group-avatar.png";
import { GroupListItem } from "../GroupsListItem";

export const GroupList = () => {

    const groups = [
        {
            avatar : avatar,
            name : "group name",
        },
        {
            avatar : avatar,
            name : "group name",
        },
        {
            avatar : avatar,
            name : "group name",
        },
    ]

    return (
        <Container>
            <Row>
                <span>YOUR GROUP</span>
            </Row>
            <Row>
                <Stack gap={3}>
                    {
                        groups.map((group) => {
                            return (
                                <GroupListItem item={group} />
                            )
                        })
                    }
                </Stack>
            </Row>
        </Container>
    );
}