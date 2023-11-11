import { render, screen} from '@testing-library/react';
import Error from './Error';
import { BrowserRouter } from 'react-router-dom';


test('display an h1 saying 404 Page Not Found', () => {
  render(<BrowserRouter><Error /></BrowserRouter>);
 const error = screen.getByText(/404 Page Not Found/i)
 expect(error).toBeInTheDocument();
});