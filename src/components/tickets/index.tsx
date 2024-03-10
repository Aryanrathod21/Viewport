import React from 'react'

type Props = {}



    const Tickets = ({ userData }) => {
      return (
        <div className="ticket">
          <h2>Ticket Details</h2>
          <p><strong>Name:</strong> {userData.Name}</p>
          <p><strong>Location to go:</strong> {userData.Location}</p>
          <p><strong>Location from where to go:</strong> {userData.Locationy}</p>
          <p><strong>Email:</strong> {userData.Email}</p>
          <p><strong>Travel Path:</strong> {userData.travelPath}</p>
        </div>
      );
    
   
    
}

export default Tickets