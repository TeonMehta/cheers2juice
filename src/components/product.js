import React from 'react';
import './product.scss'
import { Image } from "react-bootstrap";
import { withRouter } from 'react-router-dom'


const Product = ({ title, imageUrl, linkUrl, history, match }) => {
    return (
        <div
            style={{
                // backgroundImage: `url(${imageUrl})`
            }}
            className='product-item'
            onClick={() => history.push(`${match.url}/${linkUrl}`)}
        >
            <div className="content">
                <h1>{title}</h1>
                <Image fluid src={imageUrl} />
            </div>

        </div>
    );
};

export default withRouter(Product);