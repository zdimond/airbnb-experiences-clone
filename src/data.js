import zaferes from "./images/katie-zaferes.png"
import wedding from "./images/wedding-photography.png"
import bike from "./images/mountain-bike.png"

export default [
    {
        id: 1,
        title: "Life lessons with Katie Zaferes",
        stats: {
            rating: "5.0",
            reviewCount: "6"
        },
        country: "USA",
        price: "$136",
        priceUnit: "person",
        img: zaferes
    },
    {
        id: 2,
        title: "Learn wedding photography",
        stats: {
            rating: "5.0",
            reviewCount: "30"
        },
        country: "USA",
        price: "$125",
        priceUnit: "couple",
        img: wedding
    },
    {
        id: 3,
        title: "Group mountain biking",
        stats: {
            rating: "4.8",
            reviewCount: "2"
        },
        country: "USA",
        price: "$136",
        priceUnit: "biker",
        img: bike
    }
]