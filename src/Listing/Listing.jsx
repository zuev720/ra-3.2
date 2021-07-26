import React from 'react';
import {Item} from './Item/Item';
import PropTypes from 'prop-types';

export function Listing(props) {
    const items = props.offersArray;

    return (
        <div className={'item-list'}>
            {
                items.map(elem => <Item key={elem.listing_id} item={elem} />)
            }
        </div>
    )
}

Listing.defaultProps = {
    items: [],
}

Listing.propTypes = {
    offersArray: PropTypes.array.isRequired,
}
