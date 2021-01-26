import createClassName from './createClassName';

describe('createClassName', () => {
    it('creates a combined className when an optional class is specified', () => {
        expect(createClassName('button', 'button-primary')).toBe('button button-primary');
    });

    it('does not create a combined className when an optional class is not specified', () => {
        expect(createClassName('button')).toBe('button');
    });
});
