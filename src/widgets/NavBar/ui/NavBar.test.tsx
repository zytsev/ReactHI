import { render, screen } from '@testing-library/react';
import { NavBar } from './NavBar';
import { BrowserRouter } from 'react-router-dom';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';

describe('NavBar component', () => {
    test('render NavBar with first param', () => {
        renderWithTranslation(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        );

        expect(screen.getByText('Home')).toBeInTheDocument();
    });
});
