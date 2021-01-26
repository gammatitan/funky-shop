import { createUseStyles } from 'react-jss';
import createClassName from '../utils/createClassName';

const useStyles = createUseStyles((theme) => ({
    large: {
        fontSize: '1.25rem',
        margin: `0 0 ${theme.spacing(1)}px`,

        [theme.breakpoints.sm]: {
            fontSize: '1rem',
        },
    },
    default: {
        fontSize: '1rem',
        margin: `0 0 ${theme.spacing(1)}px`,

        [theme.breakpoints.sm]: {
            fontSize: '0.875rem',
        },
    },
    bold: {
        fontSize: '1rem',
        margin: 0,
        textTransform: 'uppercase',
        fontWeight: 700,

        [theme.breakpoints.sm]: {
            fontSize: '0.875rem',
        },
    },
}));

const Typogaphy = ({ children, variant = 'default', className = null }) => {
    const classes = useStyles();
    const commonProps = {
        'data-testid': 'typography',
        className: createClassName(classes[variant], className),
    };

    if (variant === 'large') {
        return <p {...commonProps}>{children}</p>;
    }

    if (variant === 'bold') {
        return <strong {...commonProps}>{children}</strong>;
    }

    return <p {...commonProps}>{children}</p>;
};

export default Typogaphy;
