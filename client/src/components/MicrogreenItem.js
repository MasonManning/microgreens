import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import MicroModal from './MicroModal'
import './MicrogreenItem.css'

MicrogreenItem.propTypes = {

};

function MicrogreenItem(props) {
    const [show, setShow] = useState(false)
    const [editItem, setEditItem] = useState({})

        const handleDelete = (id) => {
            console.log(id)
        fetch('/api/microgreens/', {
            method: 'delete',
            headers: {
                'Accept': 'Applicaiton/json',
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
            .then(data => data.status === 200 ? props.deleteMicro(id) : '')
    }
    const handleEdit = (item) => {
        setEditItem(item)
        setShow(true)
    }
    const editMicro = (item) => {
        item.id = editItem._id
        props.editMicro(item)
    }

    return (
        <div>

            {/* <AddMicroModal show={show} handleClose={() => { setShow(false) }} addMicro={addMicro}/> */}
            <MicroModal show={show} handleClose={() => { setShow(false) }} directive={editMicro}/>
            <Table striped bordered hover>                                  
                <thead>
                    <tr>
                        <th>
                            Seed
                                </th>
                        <th>
                            Seed Qty
                                </th>
                        <th>
                            Soil Type
                                </th>
                        <th>
                            Stage
                                </th>
                        <th>
                            Notes
                                </th>
                    </tr>
                </thead>

                <tbody>
                    {props.microgreens.map((x, i) => {
                        // Apparently assigning a key using the index as seen below is bad.
                        // However when I use x._id, react complains saying i'm not assigning a key...
                        return (
                            <tr key={x._id}>
                                <td >
                                    {x.seed}
                                </td>
                                <td>
                                    {x.seedQty}
                                </td>
                                <td>
                                    {x.soilType}
                                </td>
                                <td>
                                    {x.stage}
                                </td>
                                <td >
                                    {x.notes}
                                </td>
                                <td>
                                    <Button className='btnStyle' variant='danger' onClick={() => {handleDelete(x._id)}}>Delete</Button>
                                    <br/>
                                    <Button onClick={() => {handleEdit(x)}} className='btnStyle'>Edit</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default MicrogreenItem;