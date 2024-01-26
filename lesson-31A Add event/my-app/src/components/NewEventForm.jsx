// style
import "./NewEventForm.css";

import { useState } from 'react'
import { v4 as uuid } from 'uuid'

function NewEventForm({newEvent}) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  const resetInputs = () => {
    setTitle('')
    setDate('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const event = {
      title: title,
      date: date,
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
      <button>Submit</button>
    </form>
  );
}

export default NewEventForm;