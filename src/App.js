import Router from './Router';
import { ShopProvider } from './state/ShopContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import PageThemeProvider from './components/page/PageThemeProvider';
import './index.css';

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <ShopProvider>
            <PageThemeProvider>
                <Router />
            </PageThemeProvider>
        </ShopProvider>
    </QueryClientProvider>
);

export default App;
