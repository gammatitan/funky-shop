import axios from 'axios';
import { useState, useContext, createContext } from 'react';
import { useQuery } from 'react-query';
import CONFIG from '../constants/config';

const initialState = {
    products: [],
    likedProducts: [],
    showSoldItems: true,
};

const fetchProducts = async () => {
    const { data } = await axios.get(`${CONFIG.API_URL}/api/v1/products`);

    return data;
};

const ShopContext = createContext({
    loading: false,
    likeProduct: () => {},
    unlikeProduct: () => {},
    toggleSoldItemsVisiblility: () => {},
    ...initialState,
});

export const ShopProvider = ({ children }) => {
    const [state, setState] = useState({ ...initialState });
    const { isLoading } = useQuery('fetch-products', fetchProducts, {
        onSuccess: (data) => setState({ ...state, products: data }),
    });

    const likeProduct = (product) => {
        setState({
            ...state,
            likedProducts: [...state.likedProducts, product],
        });
    };

    const unlikeProduct = (likedProduct) => {
        setState({
            ...state,
            likedProducts: state.likedProducts.filter((product) => product.id !== likedProduct.id),
        });
    };

    const toggleSoldItemsVisiblility = () => {
        setState({ ...state, showSoldItems: !state.showSoldItems });
    };

    return (
        <ShopContext.Provider
            value={{
                likeProduct,
                unlikeProduct,
                toggleSoldItemsVisiblility,
                loading: isLoading,
                ...state,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => useContext(ShopContext);
