import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { Avatar } from "../Avatar";
import "./index.css";

export const Speaker = ({ speaker }) => {

    return (
        <Container fluid>
            <Row>
                <Col sm={2} className="align-self-center">
                    <Avatar source={speaker.avatar} />
                </Col>
                <Col>
                    <Stack>
                        <span className="speaker-name">{speaker.name}</span>
                        <Stack direction="horizontal">
                            <span className="speaker-job"><span className="speaker-job-name">{speaker.job}</span> at</span>
                            <Image
                                src={speaker.company.logo}
                                fluid
                                className="w-25"
                            />
                        </Stack>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
}