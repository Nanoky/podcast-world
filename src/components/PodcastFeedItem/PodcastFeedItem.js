
import { Button, Card, Col, Container, Image, Row, Stack } from "react-bootstrap";
import { FiMoreHorizontal } from "react-icons/fi";
import { Speaker } from "../common/Speaker/Speaker";
import "./index.css";

export const PodcastFeedItem = ({ item }) => {

    return (
        <Card>
            <Card.Body>
                <Container fluid>
                    <Row>
                        <Col md={5} className="align-self-center">
                            <Image
                                src={item.image}
                                className="podcast-image"
                                fluid
                            />
                        </Col>
                        <Col>
                            <Stack gap={3}>
                                <PodcastFeedItemHeader podcast={item} />
                                <Container fluid>
                                    <span className="podcast-description">
                                        {item.description}
                                    </span>
                                </Container>
                                <Speaker
                                    speaker={item.speaker}
                                />
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

const PodcastFeedItemHeader = ({ podcast }) => {

    return (
        <Container fluid>
            <Row>
                <Col md="auto">
                    <Container fluid className="date-pane">
                        <Stack className="date-stack">
                            <span className="text-center fs-6 date-month">{podcast.date.month}</span>
                            <span className="text-center fs-4 fw-bold date-day">{podcast.date.day}</span>
                        </Stack>
                    </Container>
                </Col>
                <Col>
                    <Row>
                        <p className="fw-bolder fs-5">{podcast.title}</p>
                    </Row>
                    <Row>
                        <span className="date-place">{podcast.date.dayname} {podcast.date.time} | {podcast.place}</span>
                    </Row>
                </Col>
                <Col md="auto">
                    <Button variant="light" className="bg-transparent rounded-circle">
                        <FiMoreHorizontal />
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}