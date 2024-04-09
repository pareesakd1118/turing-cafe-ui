import './App.css';
import React, {useEffect, useState} from 'react';
import ReservationContainer from '../ReverservationContainer'
import Form from '../Form'

function App() {
  const [reservations, setReservations] = useState([])

    function getReservations() {
        return fetch("http://localhost:3001/api/v1/reservations")
        .then(res => res.json())
        .then(data => setReservations(data))
    }

    useEffect(() => {
        getReservations()
    }, [])

    function postReservation(newReservation) {
      return fetch("http://localhost:3001/api/v1/reservations", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(newReservation)
      })
      .then(res => res.json())
      .then(data => setReservations([...reservations, data]))
    }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form postReservation={postReservation}/>
      </div>
      <div className='resy-container'>
        <ReservationContainer reservations={reservations}/>
      </div>
    </div>
  );
}

export default App; 