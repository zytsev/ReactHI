import { Button, ThemeButton } from './Button';
import { render, screen } from '@testing-library/react';

describe('Button component', () => {
    test('render Button with first param', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('render Button with class "clear"', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
