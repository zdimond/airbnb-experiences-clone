import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
  const cardData = data.map(card => {
    return (
      <Card
        key={card.id}
        title={card.title}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        price={card.price}
        priceUnit={card.priceUnit}
        img={card.img}
        openSpots={card.openSpots}
      />
    )
  })

  console.log(cardData)
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <div className="card-list">{cardData}</div>
      </main>
    </div>
  )
}