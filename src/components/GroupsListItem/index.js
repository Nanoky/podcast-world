import { Col, Container, Image, Row } from "react-bootstrap";
import { Avatar } from "../common/Avatar";
import "./index.css";

export const GroupListItem = ({item}) => {

    return (
        <Container fluid>
            <Row className="align-items-center">
                <Col md={2}>
                    <Avatar 
                        source={item.avatar}
                    />
                </Col>
                <Col>
                    <span className="name">{item.name}</span>
                </Col>
            </Row>
        </Container>
    );
}