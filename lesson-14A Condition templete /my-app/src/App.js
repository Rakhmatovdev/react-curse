import './App.css';
import { useState } from 'react'

// useState 

function App() {
  const [name, setName] = useState("Jasur")
  const [events, setEvents] = useState([
    {title: "Jasur's birthday party", id: 1},
    {title: "Farrux's live stream", id: 2},
    {title: "match: manchester united vs barcelona", id: 3}
  ])
  const [showEvents, setShowEvents] = useState(true)
  
  const handleClick = () => {
    setName('Farrux')
  }


  // delete items
  const handleDelete = (id) => {
    setEvents((prev) => {
      return prev.filter((event) => {
        return event.id !== id 
      })
    }) 
  }



  return (
    <div className="App">
        <h1>My name is {name}</h1>
        <button onClick={handleClick}>Change name</button>

        <hr />
        <br />

        {showEvents && <button onClick={() => {setShowEvents(false)}}>Hide Events</button>}
        {!showEvents && <button onClick={() => {setShowEvents(true)}}>Show Events</button>}
        {showEvents && <div>
          {events.length === 0 && <div> <h5>No items left</h5> </div>}
          {events.map((event) => {
            return (
              <div key={event.id}>
                <h2>{event.title}</h2>
                <button onClick={() => {handleDelete(event.id)}}>Delete</button>
              </div>
            )
          })}
        </div>}
    </div>
  );
}

export default App;