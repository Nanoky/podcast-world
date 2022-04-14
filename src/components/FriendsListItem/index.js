import { Col, Container, Image, Row } from "react-bootstrap";
import onlineIcon from "../../assets/images/green-online-icon.png"
import { Avatar } from "../common/Avatar";
import "./index.css";

export const FriendListItem = ({ item }) => {

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
                <Col md={2}>
                    {
                        item.isOnline ? (
                            <Image src={onlineIcon} width="10px" />
                        ) : (
                            <span className="time">{item.lastTime}</span>
                        )
                    }
                </Col>
            </Row>
        </Container>
    );
}