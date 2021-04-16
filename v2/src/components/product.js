import React from 'react';
import './product.scss'
import { withRouter } from 'react-router-dom'

const Product = ({ title, imageUrl, history, linkUrl, match }) => {
    return (
        <div
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            className='product-item'
            onClick={() => history.push(`${match.url}/${linkUrl}`)}

        >
            <div className="content">
                <h1>{title}</h1>
            </div>

        </div>
    );
};

export default withRouter(Product);