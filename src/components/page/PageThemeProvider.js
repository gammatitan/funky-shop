import { ThemeProvider } from 'react-jss';
import theme from '../../theme';

const PageThemeProvider = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default PageThemeProvider;
