import React, { useEffect, useState } from 'react'
import MicrogreenItem from './MicrogreenItem'
import Button from 'react-bootstrap/Button'
import MicroModal from './MicroModal'


const Dashboard = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [microgreens, setMicrogreens] = useState([{}])
    const [show, setShow] = useState(false)

    useEffect(
        () => {
            fetch('/api/microgreens'
            )
                .then(res => {
                    console.log(res)
                   return( res.json())
                })
                .then(data => {
                    setIsLoaded(true)
                    setMicrogreens(data)
                })
        },
        []
    )
    const handleAdd = () => {
        setShow(ps => true)
    }
    const deleteMicro = (id) => {
        console.log(microgreens)
        setMicrogreens(ps => ps.filter(x => x._id != id))
    }
    const addMicro = (item) =>{

        fetch('/api/microgreens', {
            method: 'POST', headers: {
                'Accept': 'Application/json',
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(item)
        }).then(res => res.status === 200 ? setMicrogreens(ps => [...ps, item]) : '')
    }
    const editMicro = (item) => {
        setMicrogreens(ps => ps.map(x => x._id === item.id ? item : x))
    }
    return (
        <div>
            {/* <h1>Welcome To Dashboard</h1> */}
            {/* {isLoaded && microgreens.map(x=> <MicrogreenItem key={x._id} microgreen={x} />)} */}
            <Button onClick={handleAdd}>Add Microgreen</Button>
            <MicroModal show={show} handleClose={() => { setShow(false) }} directive={addMicro}/>
            {isLoaded && <MicrogreenItem microgreens={microgreens} deleteMicro={deleteMicro} editMicro={editMicro}/>}
        </div>
    )
}

export default Dashboard