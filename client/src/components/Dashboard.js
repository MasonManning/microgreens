import React, { useEffect, useState } from 'react'
import MicrogreenItem from './MicrogreenItem'


const Dashboard = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [microgreens, setMicrogreens] = useState([{}])

    useEffect(
        () => {
            fetch('http://localhost:5001/api/microgreens'
            )
                .then(res => res.json())
                .then(data => {
                    setIsLoaded(true)
                    setMicrogreens(data)
                })
        },
        []
    )

    return (
        <div>
            {/* <h1>Welcome To Dashboard</h1> */}
            {/* {isLoaded && microgreens.map(x=> <MicrogreenItem key={x._id} microgreen={x} />)} */}
            {isLoaded && microgreens.map((x,i)=> {
                // Apparently assigning a key using the index as seen below is bad.
                // However when I use x._id, react complains saying i'm not assigning a key...
            return(<MicrogreenItem key={i} microgreen={x} />)
            })}
            {/* {isLoaded ? microgreens.map(x=> <MicrogreenItem key={x._id} microgreen={x} />) : ""} */}
        </div>
    )
}

export default Dashboard