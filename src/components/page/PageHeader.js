import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import ShopLikedProductsModal from '../../pages/shop/components/ShopLikedProductsModal';
import { useShop } from '../../state/ShopContext';
import Button from '../Button';
import Container from '../layout/Container';
import HeartFilledSvg from '../svg/HeartFilledSvg';

const useStyles = createUseStyles((theme) => ({
    header: {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        background: theme.palette.white,
        zIndex: 10,
        boxShadow: '1px 2px 30px 30px rgba(0,0,0,0.01)',
    },
    content: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1),
    },
    buttonText: {
        marginLeft: theme.spacing(0.5),
    },
}));

const PageHeader = () => {
    const classes = useStyles();
    const buttonRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTopPosition, setModalTopPosition] = useState(0);
    const { likedProducts } = useShop();

    useEffect(() => {
        setModalTopPosition(buttonRef.current?.offsetTop + 40);
    }, [buttonRef]);

    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.content}>
                    <div ref={buttonRef}>
                        <Button
                            className={cn('btn-toggle-likes-modal', classes.button)}
                            onClick={() => setModalOpen(!modalOpen)}
                        >
                            <HeartFilledSvg />
                            <span className={classes.buttonText}>{` ${likedProducts.length}`}</span>
                        </Button>
                    </div>
                    {modalOpen && <ShopLikedProductsModal top={modalTopPosition} />}
                </div>
            </Container>
        </header>
    );
};

export default PageHeader;
