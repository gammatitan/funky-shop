import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { useShop } from '../../../state/ShopContext';
import ShopProductItem from './ShopProductItem';

const useStyles = createUseStyles((theme) => ({
    productsList: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        columnGap: theme.spacing(5),
        rowGap: theme.spacing(5),

        [theme.breakpoints.md]: {
            gridTemplateColumns: '1fr 1fr 1fr',
            columnGap: theme.spacing(3),
            rowGap: theme.spacing(3),
        },

        [theme.breakpoints.sm]: {
            gridTemplateColumns: '1fr 1fr',
            columnGap: theme.spacing(2),
            rowGap: theme.spacing(2),
        },
    },
}));

const ShopProducts = () => {
    const classes = useStyles();
    const { products, loading, showSoldItems, likedProducts, likeProduct, unlikeProduct } = useShop();

    if (loading) {
        return null;
    }

    return (
        <div className={cn('product-list', classes.productsList)}>
            {products.map((product) => {
                const liked = likedProducts.includes(product);

                if (product.sold && !showSoldItems) {
                    return null;
                }

                return (
                    <ShopProductItem
                        key={product.id}
                        product={product}
                        liked={liked}
                        handleLike={(item) => () => {
                            if (liked) {
                                unlikeProduct(item);
                            } else {
                                likeProduct(item);
                            }
                        }}
                    />
                );
            })}
        </div>
    );
};

export default ShopProducts;
