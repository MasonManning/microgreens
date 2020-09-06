import React, { useEffect } from 'react'

const Dashboard = () => {

    useEffect(
        () => {
            console.log("UseEffect")
            fetch('http://localhost:5001/api/test/'
            )
                .then(res => res.json())
                // .then(res => console.log(res))
                .then(data => console.log(data))
        },
        []
    )

    return (
        <div>
            <h1>Welcome To Dashboard</h1>
        </div>
    )
}

export default Dashboard