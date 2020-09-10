import React, { useEffect, useState } from 'react'
import MicrogreenItem from './MicrogreenItem'
import Button from 'react-bootstrap/Button'
import AddMicroModal from './AddMicroModal'


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
        const f = microgreens.filter(x => x._id != id)
        setMicrogreens(ps => ps.filter(x => x._id != id))
        console.log(f)
    }
    const addMicro = (item) =>{
        setMicrogreens(ps => [...ps, item])
    }
    return (
        <div>
            {/* <h1>Welcome To Dashboard</h1> */}
            {/* {isLoaded && microgreens.map(x=> <MicrogreenItem key={x._id} microgreen={x} />)} */}
            <Button onClick={handleAdd}>Add Microgreen</Button>
            <AddMicroModal show={show} handleClose={() => { setShow(false) }} addMicro={addMicro}/>
            {isLoaded && <MicrogreenItem microgreens={microgreens} deleteMicro={deleteMicro}/>}
        </div>
    )
}

export default Dashboard