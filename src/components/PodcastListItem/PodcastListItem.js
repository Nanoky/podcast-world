import { Col, Container, Row, Stack } from "react-bootstrap";
import { Avatar } from "../common/Avatar";
import "./index.css";

export const PodcastListItem = ({ item }) => {

    return (
        <Container fluid>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Avatar source={item.user.avatar} width="40" className="podcast-list-avatar" />
                </Col>
            </Row>
            <Row>
                <span className="text-center podcast-list-item-username">
                    {item.user.name}
                </span>
            </Row>
        </Container>
    );
}