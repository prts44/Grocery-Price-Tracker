import { render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

test('all components render individually', () => {
    render(<SearchBar />);
    const searchBar = screen.getByTestId('SearchBar');
    expect(searchBar).toBeInTheDocument();
});
