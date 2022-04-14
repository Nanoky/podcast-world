import { Container, Row, Stack } from "react-bootstrap";
import { CenterPaneHeader } from "../CenterPaneHeader/CenterPaneHeader";
import { PodcastFeed } from "../PodcastFeed/PodcastFeed";
import { PodcastList } from "../PodcastList/PodcastList";
import "./index.css";

export const CenterPane = () => {

    return (
        <Container fluid className="central-pane h-100">
            <Row>
                <CenterPaneHeader />
            </Row>
            <Row>
                <Container className="px-5">
                    <PodcastList />
                </Container>
                <PodcastFeed />
            </Row>
        </Container>
    );
}