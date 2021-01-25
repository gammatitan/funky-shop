import { ThemeProvider } from 'react-jss';
import Router from './Router';
import theme from './theme';
import './index.css';

const App = () => (
    <ThemeProvider theme={theme}>
        <Router />
    </ThemeProvider>
);

export default App;
