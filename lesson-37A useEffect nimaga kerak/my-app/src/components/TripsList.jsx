import { useState } from "react"

const TripsList = () => {
    const [trips,setTrips]=useState([])
    fetch("http://localhost:3000/trips")
    .then(res=>res.json())
    // .then(data=>setTrips(data))
  return (
    <div>
      <h1>TripsList</h1>
    </div>
  )
}

export default TripsList
