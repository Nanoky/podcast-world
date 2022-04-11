import { Col, Container, Image, Row } from "react-bootstrap";
import onlineIcon from "../../assets/images/green-online-icon.png"

export const FriendListItem = ({ item }) => {

    return (
        <Container>
            <Row className="align-items-center">
                <Col md={1}>
                    <Image
                        src={item.avatar}
                        roundedCircle
                        fluid
                    />
                </Col>
                <Col>
                    <span>{item.name}</span>
                </Col>
                <Col md={2}>
                    {
                        item.isOnline ? (
                            <Image src={onlineIcon} width="10px" />
                        ) : (
                            <span>{item.lastTime}</span>
                        )
                    }
                </Col>
            </Row>
        </Container>
    );
}