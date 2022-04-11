import { Container, Stack } from "react-bootstrap"

import { LeftPane } from "../components/LeftPane";

export const HomePage = () => {

    return (
        <Container>
            <Stack gap={5} direction="horizontal">
                <LeftPane />
            </Stack>
        </Container>
    );
}
    