import zaferes from "./images/katie-zaferes.png"
import wedding from "./images/wedding-photography.png"
import bike from "./images/mountain-bike.png"
import astro from "./images/astrophotography.webp"
import popsicle from "./images/popsicle-sticks.jpeg"
import casino from "./images/casino.jpg"

export default [
    {
        id: 1,
        title: "Life lessons with Katie Zaferes",
        stats: {
            rating: "5.0",
            reviewCount: 6
        },
        location: "Boston, USA",
        price: "$136",
        priceUnit: "person",
        img: zaferes,
        openSpots: 0
    },
    {
        id: 2,
        title: "Learn wedding photography",
        stats: {
            rating: 4.4,
            reviewCount: 30
        },
        location: "Online",
        price: "$125",
        priceUnit: "couple",
        img: wedding,
        openSpots: 27
    },
    {
        id: 3,
        title: "Group mountain biking",
        stats: {
            rating: 4.8,
            reviewCount: 24
        },
        location: "Norway",
        price: "$136",
        priceUnit: "biker",
        img: bike,
        openSpots: 30
    },
    {
        id: 4,
        title: "Learn Astrophotography in the Mountains",
        stats: {
            rating: 4.96,
            reviewCount: 68
        },
        location: "Telluride, USA",
        price: "$136",
        priceUnit: "person",
        img: astro,
        openSpots: 44
    },
    {
        id: 5,
        title: "Popsicle Stick Art",
        stats: {
            rating: 3.2,
            reviewCount: 668
        },
        location: "Online",
        price: "$28",
        priceUnit: "participant",
        img: popsicle,
        openSpots: 13
    },
    {
        id: 6,
        title: "Casino Night!",
        stats: {
            rating: 4.2,
            reviewCount: 22
        },
        location: "Scranton, USA",
        price: "$50",
        priceUnit: "person",
        img: casino,
        openSpots: 0
    }
]