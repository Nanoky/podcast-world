import { Button, Col, Container, Form, FormControl, FormText, Image, InputGroup, Row } from "react-bootstrap";
import { FaSistrix } from 'react-icons/fa'

import logo from "../../assets/images/logo-no-bg.png";
import "./index.css"

export const LeftPaneHeader = () => {

    return (
        <Container>
            <Row className="align-items-center">
                <Col md={3}>
                    <Image src={logo} fluid />
                </Col>
                <Col className="rounded-pill bg-dark bg-opacity-10">
                    <InputGroup>
                        <Button variant="light" disabled className="bg-transparent search-item">
                            <FaSistrix />
                        </Button>
                        <FormControl
                            type="search" 
                            placeholder="search"
                            className="search-item bg-transparent"
                        />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}