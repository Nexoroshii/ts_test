import React from 'react';
import { Product } from './components/Product';
import { productss } from './data/productss';
function App() {
    return (
        <div className="container mx-auto max-w-2xl pt-5">
            <Product product={productss[0]} />
            <Product product={productss[1]} />
        </div>
    );
}

export default App;
