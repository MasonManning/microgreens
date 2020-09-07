import React from 'react';
import PropTypes from 'prop-types';

MicrogreenItem.propTypes = {
    
};

function MicrogreenItem(props) {
    return (
        <div>
        <h1>{props.microgreen.seed}</h1>
        <h1>{props.microgreen.seedQty}</h1>
        <h1>{props.microgreen.soilType}</h1>
        <h1>{props.microgreen.stage}</h1>
        <h1>{props.microgreen.notes}</h1>
        </div>
    );
}

export default MicrogreenItem;