import { Image } from "react-bootstrap";

export const Avatar = ({source, ...props}) => {

    return (
        <Image
            src={source}
            roundedCircle
            fluid
            {...props}
        />
    );
}