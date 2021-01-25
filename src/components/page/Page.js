import PageHeader from './PageHeader';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
    page: {
        minHeight: '100vh',
        background: theme.palette.grey,
    },
}));

const Page = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.page}>
            <PageHeader />
            <main>{children}</main>
        </div>
    );
};

export default Page;
