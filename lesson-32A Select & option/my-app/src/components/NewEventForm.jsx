// style
import "./NewEventForm.css";

import { useState } from 'react'
import { v4 as uuid } from 'uuid'

function NewEventForm({newEvent}) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('samarqand')

  const resetInputs = () => {
    setTitle('')
    setDate('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const event = {
      title,
      date,
      location,
      id: uuid()
    }
    newEvent(event)
    resetInputs()
  }

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
      </label>
      <label>
        <select onChange={(e)=>setLocation(e.target.value)} value={location}>
          <option value="samarqand">Samarqand</option>
          <option value="toshkent">Toshkent</option>
          <option value="fergana">Fergana</option>
          <option value="jizzax">Jizzax</option>
          <option value="buxoro">Buxoro</option>
          <option value="andijon">Andijon</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}

export default NewEventForm;