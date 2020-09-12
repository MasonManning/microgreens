import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import './AddMicroModal.css'
MicroModal.propTypes = {

};

function MicroModal(props) {
    const [seed, setSeed] = useState('')
    const [seedQty, setSeedQty] = useState('')
    const [soilType, setSoilType] = useState('')
    const [stage, setStage] = useState('')
    const [notes, setNotes] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        const newMicro = {
            
                seed: seed,
                seedQty: seedQty,
                soilType: soilType,
                stage: stage,
                notes: notes
            }
        props.directive(newMicro)
        props.handleClose()

    }
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose} >
                <Modal.Header closeButton>
                    Add New Microgreen
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control placeholder='Seed' onChange={(e) => { setSeed(e.target.value) }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control placeholder='Seed Qty' onChange={(e) => { setSeedQty(e.target.value) }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control placeholder='Soil Type' onChange={(e) => { setSoilType(e.target.value) }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control placeholder='Stage' onChange={(e) => { setStage(e.target.value) }} />
                        </Form.Group>
                        <Form.Group onSubmit={handleSubmit}>
                            <Form.Control placeholder='Notes' onChange={(e) => { setNotes(e.target.value) }} />
                        </Form.Group >
                    </Form>
                    <Table striped bordered hover>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleSubmit}>Submit</Button>
                    <Button onClick={props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MicroModal;