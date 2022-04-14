import { Container, Stack } from "react-bootstrap";
import { Scroller } from "../Scroller/index";

export const ItemsListScroller = ({ data, Component, ...props }) => {

    return (
        <Scroller {...props}>
            <Container>
                <Stack gap={5}>
                    {
                        data.map((value, index) => (
                            <Component item={value} key={index} />
                        ))
                    }
                </Stack>
            </Container>

        </Scroller>
    )
}