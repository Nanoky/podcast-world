import { useState } from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { GrPrevious, GrNext } from "react-icons/gr";
import defaultAvater from "../../assets/images/default-avatar.png";
import { PodcastListItem } from "../PodcastListItem/PodcastListItem";

export const PodcastList = () => {

    const nbItemDisplayed = 7;
    const [itemDisplayedStartIndex, setItemDisplayedStartIndex] = useState(0);

    const podcasts = [
        {
            user : {
                avatar : defaultAvater,
                name : "username"
            }
        },
        {
            user : {
                avatar : defaultAvater,
                name : "username"
            }
        },
        {
            user : {
                avatar : defaultAvater,
                name : "username"
            }
        },
        {
            user : {
                avatar : defaultAvater,
                name : "username"
            }
        },
        {
            user : {
                avatar : defaultAvater,
                name : "username"
            }
        },
        {
            user : {
                avatar : defaultAvater,
                name : "username"
            }
        },
        {
            user : {
                avatar : defaultAvater,
                name : "username"
            }
        },
        {
            user : {
                avatar : defaultAvater,
                name : "username"
            }
        },
        {
            user : {
                avatar : defaultAvater,
                name : "username"
            }
        },
        {
            user : {
                avatar : defaultAvater,
                name : "username"
            }
        },
        {
            user : {
                avatar : defaultAvater,
                name : "username"
            }
        },
        {
            user : {
                avatar : defaultAvater,
                name : "username"
            }
        },
    ];

    const next = () => {
        if (itemDisplayedStartIndex + nbItemDisplayed + 1 < podcasts.length) {
            setItemDisplayedStartIndex(itemDisplayedStartIndex + 1);
        }
    }

    const prev = () => {
        if (itemDisplayedStartIndex - 1 >= 0) {
            setItemDisplayedStartIndex(itemDisplayedStartIndex - 1);
        }
    }

    return (
        <Container fluid className="mb-5">
            <Stack direction="horizontal">
                <Button className="bg-transparent no-border" onClick={prev}>
                    <GrPrevious />
                </Button>
                <Row>
                    {
                        podcasts.map((podcast, index) => {
                            
                            return (index >= itemDisplayedStartIndex && index < itemDisplayedStartIndex + nbItemDisplayed) ? (
                                <Col>
                                    <PodcastListItem item={podcast} />
                                </Col>
                            ) : null;
                        })
                    }
                </Row>
                <Button className="bg-transparent no-border" onClick={next}>
                    <GrNext />
                </Button>
            </Stack>
        </Container>
    );
}