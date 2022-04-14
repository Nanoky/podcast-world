import { Container, Stack } from "react-bootstrap";
import { PodcastFeedItem } from "../PodcastFeedItem/PodcastFeedItem";
import podcastImage from "../../assets/images/podcast-image.jpeg";
import defaultAvatar from "../../assets/images/default-avatar.png";
import netflixLogo from "../../assets/images/netflix-logo.png";
import { ItemsListScroller } from "../common/DataScroller";

export const PodcastFeed = () => {
    const podcasts = [
        {
            image : podcastImage,
            title : "How to be a happy",
            description : "This podcast help you to smile and feel your life like never before",
            place : "zoom Meeting",
            date : {
                day : 24,
                dayname : "Fri",
                month : "May",
                time : "10:00",
            },
            speaker : {
                avatar : defaultAvatar,
                name : "Speaker name",
                job : "Web developer",
                company : {
                    name : "Netflix",
                    logo : netflixLogo
                }
            }
        },
        {
            image : podcastImage,
            title : "How to be a happy",
            description : "This podcast help you to smile and feel your life like never before",
            place : "zoom Meeting",
            date : {
                day : 24,
                dayname : "Fri",
                month : "May",
                time : "10:00",
            },
            speaker : {
                avatar : defaultAvatar,
                name : "Speaker name",
                job : "Web developer",
                company : {
                    name : "Netflix",
                    logo : netflixLogo
                }
            }
        },
        {
            image : podcastImage,
            title : "How to be a happy",
            description : "This podcast help you to smile and feel your life like never before",
            place : "zoom Meeting",
            date : {
                day : 24,
                dayname : "Fri",
                month : "May",
                time : "10:00",
            },
            speaker : {
                avatar : defaultAvatar,
                name : "Speaker name",
                job : "Web developer",
                company : {
                    name : "Netflix",
                    logo : netflixLogo
                }
            }
        },
        {
            image : podcastImage,
            title : "How to be a happy",
            description : "This podcast help you to smile and feel your life like never before",
            place : "zoom Meeting",
            date : {
                day : 24,
                dayname : "Fri",
                month : "May",
                time : "10:00",
            },
            speaker : {
                avatar : defaultAvatar,
                name : "Speaker name",
                job : "Web developer",
                company : {
                    name : "Netflix",
                    logo : netflixLogo
                }
            }
        },
        {
            image : podcastImage,
            title : "How to be a happy",
            description : "This podcast help you to smile and feel your life like never before",
            place : "zoom Meeting",
            date : {
                day : 24,
                dayname : "Fri",
                month : "May",
                time : "10:00",
            },
            speaker : {
                avatar : defaultAvatar,
                name : "Speaker name",
                job : "Web developer",
                company : {
                    name : "Netflix",
                    logo : netflixLogo
                }
            }
        },
    ];
    return (
        <ItemsListScroller data={podcasts} Component={PodcastFeedItem} height={550} unit="px" />
    )
}