import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

MicrogreenItem.propTypes = {

};

function MicrogreenItem(props) {

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
            // .then(data => data.status === 200 ? props.deleteMicro(props._id) : '')
    }
    // const handleDelete = () => {
    //     fetch('http://localhost:5001/api/microgreens', {
    //         method: "delete",
    //         headers: {
    //             "Accept": "Application/json",
    //             "Content-Type": "Applicaiton/json"
    //         },
    //         body: JSON.stringify({
    //             id: props._id
    //         })
    //     })
    // }
    return (
        <div>

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
                                <td>
                                    {x.notes}
                                </td>
                                <td>
                                    {/* <Button onClick={handleDelete("This is a string")}>Delete</Button> */}
                                    <Button onClick={() => {handleDelete(x._id)}}>Delete</Button>
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