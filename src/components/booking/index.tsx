'use client'
import React, { useState } from 'react';

import Tickets from '../tickets';

const Booking = () => {
  const [user, setUser] = useState({
    Name: '',
    Location: '',
    Email: '',
    Locationy: '',
    travelPath: ''
  });

  const [showTicket, setShowTicket] = useState(false);

  const data = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const getdata = async (e) => {
    e.preventDefault();
    const { Name, Location, Email, Locationy, travelPath } = user;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Name, Location, Email, Locationy, travelPath })
    };

    const res = await fetch('https://viewport-5de1c-default-rtdb.firebaseio.com/UserData.json', options);
    if (res.ok) {
      setShowTicket(true);
    } else {
      alert('Error Occurred');
    }
  };

  return (
    <section className='Form'>
      <div className='container w-[50dvw] justify-start items-center'>
        {!showTicket && (
          <form method='POST' className='grid grid-cols-1 grid-rows-5 justify-center items-center gap-4'>
            <input type='text' name='Name' placeholder='Enter your name' value={user.Name} autoComplete='off' required onChange={data} />
            <input type='text' name='Location' placeholder='Enter your location you want to go' value={user.Location} autoComplete='off' required onChange={data} />
            <input type='text' name='Locationy' placeholder='Enter your location from where to go' value={user.Locationy} autoComplete='off' required onChange={data} />
            <input type='text' name='Email' placeholder='Enter your Email' value={user.Email} autoComplete='off' required onChange={data} />
            <div className="flex items-center">
              <span>Select your travel path:</span>
              <label>
                <input type="radio" name="travelPath" value="train" checked={user.travelPath === 'train'} onChange={data} />
                Train
              </label>
              <label>
                <input type="radio" name="travelPath" value="bus" checked={user.travelPath === 'bus'} onChange={data} />
                Bus
              </label>
              <label>
                <input type="radio" name="travelPath" value="airplane" checked={user.travelPath === 'airplane'} onChange={data} />
                Airplane
              </label>
              {/* Add more radio buttons for other travel options if needed */}
            </div>
            <button className='bg-slate-200' onClick={getdata}>submit</button>
          </form>
        )}
        {showTicket && (
          <div className="fixed inset-0 flex justify-center items-center backdrop-blur-lg">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Tickets userData={user} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Booking;
