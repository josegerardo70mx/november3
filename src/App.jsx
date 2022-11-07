import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Resident from './assets/components/Resident';

function App() {

  const randomId = Math.floor(Math.random() * 126 ) + 1 

  const [location, setLocation] = useState ("");
  const [typeId, setTypeId] = useState("");

  useEffect (() => {
  axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
  .then(res  => setLocation(res.data))

  }, [])   
  console.log(location) 
  const searchLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
    .then(res  => setLocation(res.data))



  }

  return (
    <div className="App">
      <h1>The Rick and morty app</h1>
      <h4> name: {location.name}</h4>
      <p> type: {location.type}</p>
      <p> dimension: {location.dimension}</p>
       <p> population: {location.residents?.length}</p>


  enter locaton between 1-126
       <input type="text" value={typeId} onChange={e => setTypeId(e.target.value)   }  />
       <button className='gosear'  onClick={searchLocation}   >GO</button>
       

       {location.residents?.map((location) => (
        <Resident url = {location} 
        key ={location} 
        />
       ) ) }


          



</div>
      




  )
}

export default App
