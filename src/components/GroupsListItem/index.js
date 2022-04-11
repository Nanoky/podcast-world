import { Col, Container, Image, Row } from "react-bootstrap";

export const GroupListItem = ({item}) => {

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
            </Row>
        </Container>
    );
}