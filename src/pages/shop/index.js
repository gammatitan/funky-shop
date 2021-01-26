import Page from '../../components/page/Page';
import ShopFilters from './components/ShopFilters';
import ShopProducts from './components/ShopProducts';

const Shop = () => {
    return (
        <Page>
            <ShopFilters />
            <ShopProducts />
        </Page>
    );
};

export default Shop;
