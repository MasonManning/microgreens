import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import './AddMicroModal.css'
AddMicroModal.propTypes = {

};

function AddMicroModal(props) {
    console.log(props.show)
    return (
        <div>
            {/* <Modal show={props.show} onHide={props.handleClose} dialogClassName="modal-dialog modal-xl" > */}
            <Modal show={props.show} onHide={props.handleClose} dialogClassName="modal-90w">
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
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
                            <tr>
                                <td>
                                    <input type='text' placeholder="Enter A Seed Type"/>
                                </td>
                                <td>
                                    <input type='text' placeholder="Enter A Seed Qty"/>
                                </td>
                                <td>
                                    <input type='text' placeholder="Enter A Soil Type"/>
                                </td>
                                <td>
                                    <input type='text' placeholder="Leave Blank To Default To Germination"/>
                                </td>
                                <td>
                                    <input type='text' placeholder="Enter Notes"/>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    Table With Inputs Here
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddMicroModal;