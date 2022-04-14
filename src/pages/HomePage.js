import { Col, Container, Row, Stack } from "react-bootstrap"
import { CenterPane } from "../components/CenterPane/CenterPane";
import { LeftPane } from "../components/LeftPane";
import "./index.css";

export const HomePage = () => {

    return (
        <Container fluid>
            <Row>
                <Col sm={3} className="col-fluid">
                    <LeftPane />
                </Col>
                <Col sm={6} className="col-fluid">
                    <CenterPane />
                </Col>
            </Row>
        </Container>
    );
}