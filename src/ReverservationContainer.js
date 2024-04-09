import React from "react"
import Reservation from "./Reservation"
import "./ReservationContainer.css"

function ReservationContainer({reservations, cancelReservation}) {


    const reservationList = reservations.map(reservation => {
        return <Reservation
                    key={reservation.id}
                    id={reservation.id}
                    name={reservation.name}
                    time={reservation.time}
                    number={reservation.number}
                    date={reservation.date}
                    cancelReservation={cancelReservation}
                />
    })

    return (
        <div className="reservation-container">
            {reservationList}
        </div>
    )
}

export default ReservationContainer