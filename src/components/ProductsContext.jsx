import { createContext, useContext, useState } from 'react';
import { goodsItems } from './Goods';


const ProductsContext = createContext();
export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
    const [products] = useState(goodsItems);
    // console.log(products)

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};