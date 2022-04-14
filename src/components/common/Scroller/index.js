import { Container } from "react-bootstrap";
import "./index.css";

export const Scroller = ({height, unit, children}) => {

    return (
        <Container fluid className="content-container" style={{height: height + ((unit) ? unit : 'px')}}>
            {children}
        </Container>
    );
}