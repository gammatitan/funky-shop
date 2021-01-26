import PageHeader from './PageHeader';
import { createUseStyles } from 'react-jss';
import Container from '../layout/Container';

const useStyles = createUseStyles((theme) => ({
    page: {
        minHeight: '100vh',
        background: theme.palette.grey,
    },
    main: {
        margin: `${theme.spacing(10)}px auto 0`,
        padding: `${theme.spacing(10)}px 0`,
    },
}));

const Page = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.page}>
            <PageHeader />
            <main className={classes.main}>
                <Container>{children}</Container>
            </main>
        </div>
    );
};

export default Page;
