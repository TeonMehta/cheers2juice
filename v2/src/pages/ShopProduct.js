import React from 'react';
import products from '../menu';

const ShopProduct = (props) => {
    const name = props.match.params.productId;
    const juice = products.filter(product => product.linkUrl === name)[0];
    console.log(juice)

    return (
        <div>
            <h1>{juice.title}</h1>

        </div>
    );
};

export default ShopProduct;