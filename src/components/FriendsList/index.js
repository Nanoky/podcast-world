import { Container, ListGroup, ListGroupItem, Row, Stack } from "react-bootstrap"

import { FriendListItem } from "../FriendsListItem";
import avatar from "../../assets/images/default-avatar.png"


export const FriendList = () => {

    const friends = [
        {
            avatar : avatar,
            name : "username",
            isOnline : false,
            lastTime : "10 min"
        },
        {
            avatar : avatar,
            name : "username",
            isOnline : true,
            lastTime : "10 min"
        },
        {
            avatar : avatar,
            name : "username",
            isOnline : false,
            lastTime : "10 min"
        },
        {
            avatar : avatar,
            name : "username",
            isOnline : false,
            lastTime : "10 min"
        },
        {
            avatar : avatar,
            name : "username",
            isOnline : false,
            lastTime : "10 min"
        },
    ]

    return (
        <Container>
            <Row>
                <span>FRIENDS</span>
            </Row>
            <Row>
                <Stack gap={2}>
                    {
                        friends.map((friend) => {
                            return (
                                <FriendListItem item={friend} />
                            )
                        })
                    }
                </Stack>
            </Row>
        </Container>
    );
}