import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Resident = ({url}) => {
    
    const [resident, setResident] = useState ({});

    useEffect (() => {
      axios.get(url)
      .then ((res) => setResident(res.data)) 

    }, [] )

    return (
        <div>
          <li>
          <p>{resident.name}</p>
          
        <img src={resident.image} ></img>
        
          </li>
            
        </div>
    );
};

export default Resident;