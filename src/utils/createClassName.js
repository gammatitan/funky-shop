import cn from 'classnames';

const createClassName = (rootClass, optionalClass = '') => {
    return cn({
        [rootClass]: true,
        [optionalClass]: Boolean(optionalClass),
    });
};

export default createClassName;
