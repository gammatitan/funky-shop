import { render } from '@testing-library/react';
import Typography from './Typogaphy';
import PageThemeProvider from './page/PageThemeProvider';

describe('<Typography />', () => {
    it('renders the component', () => {
        const { queryByTestId } = render(
            <PageThemeProvider>
                <Typography />
            </PageThemeProvider>
        );
        const typography = queryByTestId('typography');

        expect(typography).toBeTruthy();
    });

    it('renders a <p> tag when a variant of "default" is supplied', () => {
        const { queryByTestId } = render(
            <PageThemeProvider>
                <Typography variant="default" />
            </PageThemeProvider>
        );
        const typography = queryByTestId('typography');

        expect(typography.nodeName).toBe('P');
    });

    it('renders a <strong> tag when a variant of "bold" is supplied', () => {
        const { queryByTestId } = render(
            <PageThemeProvider>
                <Typography variant="bold" />
            </PageThemeProvider>
        );
        const typography = queryByTestId('typography');

        expect(typography.nodeName).toBe('STRONG');
    });

    it('renders a <p> tag when a variant of "large" is supplied', () => {
        const { queryByTestId } = render(
            <PageThemeProvider>
                <Typography variant="large" />
            </PageThemeProvider>
        );
        const typography = queryByTestId('typography');

        expect(typography.nodeName).toBe('P');
    });
});
