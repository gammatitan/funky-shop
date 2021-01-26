import { render } from '@testing-library/react';
import Button from './Button';
import PageThemeProvider from './page/PageThemeProvider';

describe('<Button />', () => {
    it('renders the component', () => {
        const { queryByRole } = render(
            <PageThemeProvider>
                <Button />
            </PageThemeProvider>
        );
        const btn = queryByRole('button');

        expect(btn).toBeTruthy();
    });

    it('uses the className prop', () => {
        const { queryByRole } = render(
            <PageThemeProvider>
                <Button className="test-class" />
            </PageThemeProvider>
        );
        const btn = queryByRole('button');

        expect(btn.className.includes('test-class')).toBeTruthy();
    });
});
