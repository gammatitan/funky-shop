import { render } from '@testing-library/react';
import ShopFilters from './ShopFilters';
import { ShopContext } from '../../../state/ShopContext';
import PageThemeProvider from '../../../components/page/PageThemeProvider';

describe('<ShopFilters />', () => {
    it('shows the "Hide Sold Items" button label', () => {
        const { getByText } = render(
            <ShopContext.Provider value={{ products: [], showSoldItems: true }}>
                <PageThemeProvider>
                    <ShopFilters />
                </PageThemeProvider>
            </ShopContext.Provider>
        );

        expect(getByText('Hide Sold Items')).toBeInTheDocument();
    });

    it('shows the "Show Sold Items" button label', () => {
        const { getByText } = render(
            <ShopContext.Provider value={{ products: [], showSoldItems: false }}>
                <PageThemeProvider>
                    <ShopFilters />
                </PageThemeProvider>
            </ShopContext.Provider>
        );

        expect(getByText('Show Sold Items')).toBeInTheDocument();
    });

    it('shows the correct number of results', () => {
        const { getByText } = render(
            <ShopContext.Provider value={{ products: [{ id: 1 }, { id: 2 }, { id: 3 }] }}>
                <PageThemeProvider>
                    <ShopFilters />
                </PageThemeProvider>
            </ShopContext.Provider>
        );

        expect(getByText('3 Results')).toBeInTheDocument();
    });

    it('uses a plural for "results" if the number of products is 1', () => {
        const { getByText } = render(
            <ShopContext.Provider value={{ products: [{ id: 1 }] }}>
                <PageThemeProvider>
                    <ShopFilters />
                </PageThemeProvider>
            </ShopContext.Provider>
        );

        expect(getByText('1 Result')).toBeInTheDocument();
    });
});
