import React, {useState} from "react"

function Form({addReservation}) {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guests, setGuests] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        const newReservation = {
            name,
            date,
            time,
            guests,
            id: Date.now()
        }

        addReservation(newReservation)
    }

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" id="name-field" name="name" value={name} onChange={event => setName(event.target.value)} placeholder="Name" />
        <input type="text" id="date-field" name="date" value={date} onChange={event => setDate(event.target.value)} placeholder="Date (mm/dd)" />
        <input type="text" id="time-field" name="time" value={time} onChange={event => setTime(event.target.value)} placeholder="Time" />
        <input type="text" id="guests-field" name="guests" value={guests} onChange={event => setGuests(event.target.value)} placeholder="Number of Guests" />
    
        <input className="submit-btn" type="submit" value="Submit" />
        </form>
    )
}

export default Form