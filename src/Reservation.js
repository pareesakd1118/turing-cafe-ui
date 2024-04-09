import React from "react"
import "./Reservation.css"

function Reservation({id, name, date, number, time}) {

    return (
        <div key={id} className="reservation" id={id}>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time}pm</p>
            <p>Number of Guests: {number}</p>
            <button>cancel</button>
        </div>
    )
}

export default Reservation 