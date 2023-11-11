import { render, screen, fireEvent } from "@testing-library/react";
import Logout from "./Logout";
import { BrowserRouter } from "react-router-dom";
import AuthenticationService from "../../services/AuthenticationService";

test("display a button to log out", () => {
  render(
    <BrowserRouter>
      <Logout />
    </BrowserRouter>
  );
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});

jest.mock("../../services/AuthenticationService", () => ({
  logout: jest.fn(),
}));

test("calls AuthenticationService.logout() when logout button is clicked", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Logout />
    </BrowserRouter>
  );

  const logoutButton = screen.getByTestId("logoutButton-Id");

  fireEvent.click(logoutButton);

  expect(AuthenticationService.logout).toHaveBeenCalled();
});