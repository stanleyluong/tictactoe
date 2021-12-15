import { render, screen } from '@testing-library/react';
import App from './App';


describe('App testing', () => {

  test('renders TicTacToe header', () => {
    render(<App />);
    const header = screen.getByText(/TicTacToe/i);
    expect(header).toBeInTheDocument();
  });
  
})