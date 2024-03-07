'use client'
import React, {useState} from 'react'

type Props = {}

const Booking = (props: Props) => {
    const [user, setUser] = useState(
        {
            Name: '', Location: '', Email: ''
        }
    )
    let name, value
    console.log(user)
    const data =  (e) =>
    {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value});
    }

    const getdata = async (e) =>
    {
        const {Name, Location, Email} = user;
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type':'aplication/json'
            },
            body: JSON.stringify({
                Name, Location, Email

            })
        }
        const res = await fetch('https://viewport-5de1c-default-rtdb.firebaseio.com/UserData.json',
        options
        )
        console.log(res); 
        if(res)
        {
            alert("Message Sent")
        }
        else
        {
            alert("Error Occured")
        }
    }
    
  return (
    <div className='Form'>
        <div className='container'>
            <form method='POST'>
                <input type='text' name='Name' placeholder='Enter your name' value={user.Name} autoComplete='off' required onChange={data}></input>
                <input type='text' name='Location' placeholder='Enter your locatin' value={user.Location} autoComplete='off' required onChange={data}></input>
                <input type='text' name='Email' placeholder='Enter your Email' value={user.Email} autoComplete='off' required onChange={data}></input>
                <button onClick={getdata}>submit</button>
            </form>
        </div>
    </div>
  )
}

export default Booking