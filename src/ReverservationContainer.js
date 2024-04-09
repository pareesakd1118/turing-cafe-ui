import React, {useEffect, useState} from "react"
import Reservation from "./Reservation"
import "./ReservationContainer.css"

function ReservationContainer({reservations}) {
    // const [reservations, setReservations] = useState([])

    // function getReservations() {
    //     return fetch("http://localhost:3001/api/v1/reservations")
    //     .then(res => res.json())
    //     .then(data => setReservations(data))
    // }

    // useEffect(() => {
    //     getReservations()
    // }, [])

    const reservationList = reservations.map(reservation => {
        return <Reservation
                    key={reservation.id}
                    id={reservation.id}
                    name={reservation.name}
                    time={reservation.time}
                    number={reservation.number}
                    date={reservation.date}
                />
    })

    return (
        <div className="reservation-container">
            {reservationList}
        </div>
    )
}

export default ReservationContainer