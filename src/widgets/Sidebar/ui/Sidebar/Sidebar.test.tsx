import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar component', () => {
    test('render Sidebar with first param', () => {
        render(<Sidebar />);
        expect(screen.getByText('togle')).toBeInTheDocument();
    });
    test('collapse Sidebar after click', () => {
        render(<Sidebar />);
        const ToggleButton = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(ToggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
