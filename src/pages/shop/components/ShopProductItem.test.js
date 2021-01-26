import { render } from '@testing-library/react';
import PageThemeProvider from '../../../components/page/PageThemeProvider';
import ShopProductItem from './ShopProductItem';

describe('<ShopProductItem />', () => {
    it('shows the correct product information', () => {
        const { getByText } = render(
            <PageThemeProvider>
                <ShopProductItem
                    handleLike={() => {}}
                    liked={false}
                    product={{
                        name: 'Red Jacket',
                        brand: 'Nike',
                        price: '35.00',
                        sold: false,
                    }}
                />
            </PageThemeProvider>
        );

        expect(getByText('Red Jacket')).toBeInTheDocument();
        expect(getByText('Nike')).toBeInTheDocument();
        expect(getByText('£35.00')).toBeInTheDocument();
    });

    it('shows the sold label', () => {
        const { getByText } = render(
            <PageThemeProvider>
                <ShopProductItem
                    handleLike={() => {}}
                    liked={false}
                    product={{
                        name: 'Red Jacket',
                        brand: 'Nike',
                        price: '35.00',
                        sold: true,
                    }}
                />
            </PageThemeProvider>
        );

        expect(getByText('Sold')).toBeInTheDocument();
    });
});
