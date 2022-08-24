import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
  const cardData = data.map(card => {
    return (
      <Card
        title={card.title}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        country={card.country}
        price={card.price}
        priceUnit={card.priceUnit}
        img={card.img}
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