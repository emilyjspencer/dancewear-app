import { render, screen, waitFor} from '@testing-library/react';
import Login from './Login';
import UserProfile from '../../UserProfile/UserProfile';
import { BrowserRouter } from 'react-router-dom';
import { userEvent } from '@testing-library/user-event';


test('display an input field to enter username', () => {
  render(<BrowserRouter><Login /></BrowserRouter>);
 const usernameField = screen.getByText(/Username/i)
 expect(usernameField).toBeInTheDocument();
});

test('display an input field to enter password', () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
   const passwordField = screen.getByText(/Password/i)
   expect(passwordField).toBeInTheDocument();
});


test('upon successful login taken to user-profile page and see User type: ADMIN', async() => {
    
    render(<BrowserRouter><Login /></BrowserRouter>);
   
    const loginButton = screen.getByRole('button', {name: 'Log in'})
    expect(loginButton).toBeInTheDocument();

    const username = "admin";
    const password = "password";
    const mockLogin = jest.fn();

    render(<BrowserRouter><Login onSubmit={mockLogin(username, password)} /></BrowserRouter>);
    
    const usernameInput = screen.getByTestId(/username-data/i );
    await userEvent.type(usernameInput, 'admin');
    const passwordInput = screen.getByText(/Password/i);
    await userEvent.type(passwordInput, 'password');
    const loginButton2 = screen.getByRole('button', { name: /^Log in$/i });
    expect(loginButton2).toBeEnabled();

  
    await userEvent.click(loginButton2);


    await userEvent.click(screen.getByRole('button', {name :'Log in'}))
   
    await render(<BrowserRouter><UserProfile /></BrowserRouter>)
 
    expect(screen.getByText('User type')).toBeInTheDocument()
    
  
})