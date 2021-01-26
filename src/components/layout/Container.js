import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
    container: {
        padding: `0 ${theme.spacing(2)}px`,
        maxWidth: 1440,
        margin: '0 auto',
    },
}));

const Container = ({ children }) => {
    const classes = useStyles();

    return <div className={classes.container}>{children}</div>;
};

export default Container;
