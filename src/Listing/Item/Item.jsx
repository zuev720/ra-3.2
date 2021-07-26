import React from 'react';
import PropTypes from 'prop-types';

export function Item(props) {
    if (props.item.state === 'removed') return null;
    const item = props.item;
    const image = item.MainImage.url_570xN;
    const title = (item.title.length > 50) ? `${item.title.substring(0, 50)}...` : item.title;
    const price = (item.currency_code === 'USD' || item.currency_code === 'EUR')
        ? (item.currency_code === 'USD') ? `$${item.price}` : `€${item.price}`
        : `${item.currency_code} ${item.price}`;

    const quantityLevel = (Number(item.quantity) > 20)
        ? 'item-quantity level-high'
        : (Number(item.quantity) < 10) ? 'item-quantity level-low' : 'item-quantity level-medium';

    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={image} alt={item.title}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title}</p>
                <p className="item-price">{price}</p>
                <p className={quantityLevel}>{item.quantity}</p>
            </div>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
}
