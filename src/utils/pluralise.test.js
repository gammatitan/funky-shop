import pluralise from './pluralise';

describe('pluralise', () => {
    it('returns the single if the count is 1', () => {
        expect(pluralise(1, 'banana', 'bananas')).toBe('banana');
    });

    it('returns the plural if the count is not one', () => {
        expect(pluralise(-1, 'banana', 'bananas')).toBe('bananas');

        expect(pluralise(0, 'banana', 'bananas')).toBe('bananas');

        expect(pluralise(2, 'banana', 'bananas')).toBe('bananas');

        expect(pluralise(1000, 'banana', 'bananas')).toBe('bananas');
    });
});
