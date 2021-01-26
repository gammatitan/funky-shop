import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import Button from '../../../components/Button';
import Typogaphy from '../../../components/Typogaphy';
import { useShop } from '../../../state/ShopContext';
import pluralise from '../../../utils/pluralise';

const useStyles = createUseStyles((theme) => ({
    filters: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(5),
    },
    resultsText: {
        margin: 0,
    },
}));

const ShopFilters = () => {
    const classes = useStyles();
    const { products, showSoldItems, toggleSoldItemsVisiblility } = useShop();

    return (
        <div className={classes.filters}>
            <div>
                <Typogaphy className={cn('results-count', classes.resultsText)} variant="large">{`${
                    products.length
                } ${pluralise(products.length, 'Result', 'Results')}`}</Typogaphy>
            </div>
            <div className={classes.inputs}>
                <Button className="btn-toggle-sold-items" onClick={toggleSoldItemsVisiblility}>
                    {showSoldItems ? 'Hide Sold Items' : 'Show Sold Items'}
                </Button>
            </div>
        </div>
    );
};

export default ShopFilters;
