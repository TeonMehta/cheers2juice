import React, { Component } from 'react';
import './Shop.scss'
import Product from '../components/product';
import products from '../menu'


class Shop extends Component {
    constructor() {
        super();

        this.state = {
            products
        }
    }
    componentDidMount() {
        console.log(products)

    }

    render() {
        return (
            <div className="shop">
                {
                    products.map(({ id, ...otherProductProps }) => (
                        < Product
                            key={id}
                            {...otherProductProps}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Shop;