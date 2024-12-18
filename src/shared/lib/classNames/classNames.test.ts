import classNames from './classNames';

describe('classNames', () => {
    test('function classNames should return one class', () => {
        expect(classNames('anyClass')).toBe('anyClass');
    });
    test('function classNames should return thre classes', () => {
        const expected = 'anyClass secondClass theardClass';
        expect(classNames('anyClass', {}, ['secondClass', 'theardClass'])).toBe(expected);
    });
    test('function classNames should return all classes', () => {
        const expected = 'anyClass class1 class2 secondClass theardClass';
        expect(classNames('anyClass', { class1: true, class2: true }, ['secondClass', 'theardClass'])).toBe(expected);
    });
    test('function classNames not should return class2', () => {
        const expected = 'anyClass class1 secondClass theardClass';
        expect(classNames('anyClass', { class1: true, class2: false }, ['secondClass', 'theardClass'])).toBe(expected);
    });
    test('function classNames not should return class1', () => {
        const expected = 'anyClass class2 secondClass theardClass';
        expect(classNames('anyClass', { class1: undefined, class2: true }, ['secondClass', 'theardClass'])).toBe(expected);
    });
});
