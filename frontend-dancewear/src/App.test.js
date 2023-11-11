import { render, screen } from '@testing-library/react';
import App from './App';


test('renders Dancewear', () => {
  render(<App />);
 const h1Tag = screen.getAllByText(/Dancewear/i)[0]
 expect(h1Tag).toBeInTheDocument();
});
