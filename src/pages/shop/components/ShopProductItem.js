import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import Button from '../../../components/Button';
import HeartFilledSvg from '../../../components/svg/HeartFilledSvg';
import HeartOutlinedSvg from '../../../components/svg/HeartOutlinedSvg';
import Typogaphy from '../../../components/Typogaphy';
import photoPlaceholder from '../../../assets/photo-placeholder.jpg';

const useStyles = createUseStyles((theme) => ({
    imgContainer: {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        paddingBottom: '100%',
    },
    soldWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 2,
        background: 'rgba(0,0,0,0.8)',
    },
    soldText: {
        letterSpacing: '0.25rem',
        textTransform: 'uppercase',
        color: theme.palette.white,
    },
    likedButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: theme.spacing(0.5),
        right: theme.spacing(0.5),
        position: 'absolute',
        height: 40,
        width: 40,
        zIndex: 3,
        padding: theme.spacing(1),
        background: 'none',
        border: 0,

        '& > svg': {
            width: '100%',
            height: '100%',
        },
    },
    img: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    info: {
        marginTop: theme.spacing(2),
    },
}));

const ShopProductItem = (props) => {
    const classes = useStyles();
    const { liked, handleLike, product } = props;
    const { name, brand, price, img, sold } = product;

    return (
        <div className={cn({ 'product-list-item': true, 'product-list-item-sold': sold })}>
            <div className={classes.imgContainer}>
                <Button
                    className={cn(`btn-${liked ? 'unlike' : 'like'}-product`, classes.likedButton)}
                    onClick={handleLike(product)}
                    aria-label={liked ? 'Unlike' : 'Like'}
                >
                    {liked ? <HeartFilledSvg /> : <HeartOutlinedSvg />}
                </Button>
                {sold && (
                    <div className={classes.soldWrapper}>
                        <Typogaphy className={classes.soldText} variant="bold">
                            Sold
                        </Typogaphy>
                    </div>
                )}
                <img className={classes.img} src={photoPlaceholder} alt={name} />
            </div>
            <div className={classes.info}>
                <Typogaphy variant="large">{brand}</Typogaphy>
                <Typogaphy>{name}</Typogaphy>
                <Typogaphy variant="bold">{`£${price}`}</Typogaphy>
            </div>
        </div>
    );
};

export default ShopProductItem;
