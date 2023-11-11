import { render, screen } from '@testing-library/react';
import App from './App';


test('renders If you need to create an account', () => {
  render(<App />);
 const h1Tag = screen.getByText(/Connect with us/i)
 expect(h1Tag).toBeInTheDocument();
});
