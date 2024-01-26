// style
import "./NewEventForm.css";

import { useRef } from 'react'
import { v4 as uuid } from 'uuid'

function NewEventForm({newEvent}) {
 const title=useRef()
 const date=useRef()
 const location=useRef("samarqand")
 const form=useRef()

  const resetInputs = () => {
  form.current.reset()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const event = {
      title:title.current.value,
      date:date.current.value,
      location:location.current.value,
      id: uuid()
    }
    newEvent(event)
    resetInputs()
  }

  return (
    <form className="new-event-form" onSubmit={handleSubmit} ref={form}>
      <label>
        <span>Event Title:</span>
        <input type="text" ref={title}/>
      </label>
      <label>
        <span>Event Date:</span>
        <input type="date" ref={date}/>
      </label>
      <label>
      <span>Event Location:</span>
        <select  ref={location}>  
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