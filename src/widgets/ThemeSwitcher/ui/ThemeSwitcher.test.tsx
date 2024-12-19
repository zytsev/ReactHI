import { render, screen } from '@testing-library/react';
import { ThemeSwitcher } from './ThemeSwitcher';

describe('ThemeSwitcher component', () => {
    test('render ThemeSwitcher with first param', () => {
        render(<ThemeSwitcher />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});
