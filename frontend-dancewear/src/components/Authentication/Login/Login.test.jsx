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


test("successfully logs in with username and password as admin user", async () => {
    const username = "admin";
    const password = "password";
    const mockLogin = jest.fn();
  
    render(
      <BrowserRouter>
        <Login onSubmit={mockLogin(username, password)} />
      </BrowserRouter>
    );
  
    const usernameInput = screen.getByText(/Username/i);
    await userEvent.type(usernameInput, "admin");
    const passwordInput = screen.getByText(/Password/i);
    await userEvent.type(passwordInput, "password");
    const loginButton = screen.getByRole("button", { name: /^Log in$/i });
    expect(loginButton).toBeEnabled();
  
    await userEvent.click(loginButton);
  
    await expect(mockLogin).toHaveBeenCalled();
    await expect(mockLogin).toHaveBeenCalledTimes(1);
    await expect(mockLogin).toHaveBeenCalledWith("admin", "password");
  });
  

  test("successfully logs in with username and password as normal user", async () => {
    const username = "emilyjanespencer1";
    const password = "disney1";
    const mockLogin = jest.fn();
  
    render(
      <BrowserRouter>
        <Login onSubmit={mockLogin(username, password)} />
      </BrowserRouter>
    );
  
    const usernameInput = screen.getByText(/Username/i);
    await userEvent.type(usernameInput, "emilyjanespencer1");
    const passwordInput = screen.getByText(/Password/i);
    await userEvent.type(passwordInput, "disney1");
    const loginButton = screen.getByRole("button", { name: /^Log in$/i });
    expect(loginButton).toBeEnabled();
  
    await userEvent.click(loginButton);
  
    await expect(mockLogin).toHaveBeenCalled();
    await expect(mockLogin).toHaveBeenCalledTimes(1);
    await expect(mockLogin).toHaveBeenCalledWith("emilyjanespencer1", "disney1");
  });
  
  test("successfully logs in with username and password as dance teacher user", async () => {
    const username = "lucyspencer1";
    const password = "disney1";
    const mockLogin = jest.fn();
  
    render(
      <BrowserRouter>
        <Login onSubmit={mockLogin(username, password)} />
      </BrowserRouter>
    );
  
    const usernameInput = screen.getByText(/Username/i);
    await userEvent.type(usernameInput, "lucyspencer1");
    const passwordInput = screen.getByText(/Password/i);
    await userEvent.type(passwordInput, "disney1");
    const loginButton = screen.getByRole("button", { name: /^Log in$/i });
    expect(loginButton).toBeEnabled();
  
    await userEvent.click(loginButton);
  
    await expect(mockLogin).toHaveBeenCalled();
    await expect(mockLogin).toHaveBeenCalledTimes(1);
    await expect(mockLogin).toHaveBeenCalledWith("lucyspencer1", "disney1");
  });
  
  test("shows an error if unsuccessful authentication", async () => {
    const username = "admin";
    const password = "testingggg";
    const mockLogin = jest.fn();
  
    render(
      <BrowserRouter>
        <Login onSubmit={mockLogin(username, password)} />
      </BrowserRouter>
    );
  
    const usernameInput = screen.getByText(/Username/i);
    await userEvent.type(usernameInput, "admin");
    const passwordInput = screen.getByText(/Password/i);
    await userEvent.type(passwordInput, "testingggg");
    const loginButton = screen.getByRole("button", { name: /^Log in$/i });
    expect(loginButton).toBeEnabled();
  
    await userEvent.click(loginButton);
  
    await expect(mockLogin).toHaveBeenCalled();
    await expect(mockLogin).toHaveBeenCalledTimes(1);
    await expect(mockLogin).toHaveBeenCalledWith("admin", "testingggg");
    const element = screen.getByTestId("error-occurred");
    expect(element).toBeInTheDocument();
  });
  