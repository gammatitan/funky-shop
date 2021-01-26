import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import Button from '../../../components/Button';
import CrossSvg from '../../../components/svg/CrossSvg';
import { useShop } from '../../../state/ShopContext';

const useStyles = createUseStyles((theme) => ({
    modal: {
        position: 'fixed',
        background: theme.palette.white,
        boxShadow: '1px 1px 10px rgb(0 0 0 / 7%)',
        borderRadius: theme.spacing(1),
    },
    content: {
        padding: theme.spacing(2),
    },
    list: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
    },
    removeButton: {
        display: 'flex',
        marginLeft: theme.spacing(2),
        padding: 0,
        border: 0,
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        width: 240,
        justifyContent: 'space-between',
        margin: `${theme.spacing(0.5)}px`,
    },
}));

const ShopLikedProductsModal = ({ top }) => {
    const classes = useStyles();
    const { likedProducts, unlikeProduct } = useShop();

    return (
        <div className={cn('liked-products-modal', classes.modal)} style={{ top }}>
            <div className={classes.content}>
                {likedProducts.length ? (
                    <ul className={classes.list}>
                        {likedProducts.map((product) => (
                            <li className={classes.listItem}>
                                <span>{product.brand}</span>
                                <Button
                                    className={cn('btn-modal-unlike-product', classes.removeButton)}
                                    onClick={() => unlikeProduct(product)}
                                    aria-label="Remove"
                                >
                                    <CrossSvg />
                                </Button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <span>No liked products.</span>
                )}
            </div>
        </div>
    );
};

export default ShopLikedProductsModal;
