import { createUseStyles } from 'react-jss';
import createClassName from '../utils/createClassName';

const useStyles = createUseStyles((theme) => ({
    button: {
        background: 'unset',
        textTransform: 'uppercase',
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
        cursor: 'pointer',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: theme.palette.black,
        transition: 'opacity 0.2s ease',

        '&:hover': {
            opacity: 0.7,
        },
    },
}));

const Button = ({ children, className = '', ...props }) => {
    const classes = useStyles();

    return (
        <button className={createClassName(classes.button, className)} {...props}>
            {children}
        </button>
    );
};

export default Button;
