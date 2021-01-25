import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
    header: {
        background: theme.palette.white,
    },
    content: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
}));

function PageHeader(props) {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <div className={classes.content}>
                <p>I am the header</p>
            </div>
        </header>
    );
}

export default PageHeader;
