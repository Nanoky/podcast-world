import { Button, Col, Container, Row, Stack } from "react-bootstrap"
import { FiHome, FiSettings } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";
import { BiMessageRoundedDetail, BiTimeFive } from "react-icons/bi";
import { CgFlagAlt } from "react-icons/cg";
import "./index.css";

export const CenterPaneHeader = () => {

    return (
        <Container className="d-flex justify-content-center align-items-start mb-4">
            <div className="header-pane">
                <Stack direction="horizontal" gap={2}>
                    <Button>
                        <FiHome />
                    </Button>
                    <Button variant="light" className="bg-transparent">
                        <GrGroup />
                    </Button>
                    <Button variant="light" className="bg-transparent">
                        <BiMessageRoundedDetail />
                    </Button>
                    <Button variant="light" className="bg-transparent">
                        <BiTimeFive />
                    </Button>
                    <Button variant="light" className="bg-transparent">
                        <CgFlagAlt />
                    </Button>
                    <Button variant="light" className="bg-transparent">
                        <FiSettings />
                    </Button>
                </Stack>
            </div>
        </Container>
    );
}