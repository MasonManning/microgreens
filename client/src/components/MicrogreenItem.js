import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table'

MicrogreenItem.propTypes = {

};

function MicrogreenItem(props) {
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
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default MicrogreenItem;