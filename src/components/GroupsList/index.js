import { Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
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
                <ListGroup variant="flush">
                    {
                        groups.map((group) => {
                            return (
                                <ListGroupItem>
                                    <GroupListItem item={group} />
                                </ListGroupItem>
                            )
                        })
                    }
                </ListGroup>
            </Row>
        </Container>
    );
}