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

    function addReservation(newReservation) {
      setReservations([...reservations, newReservation])
    }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form addReservation={addReservation}/>
      </div>
      <div className='resy-container'>
        <ReservationContainer reservations={reservations}/>
      </div>
    </div>
  );
}

export default App; 