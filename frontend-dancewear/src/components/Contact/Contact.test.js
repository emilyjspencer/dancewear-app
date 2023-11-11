import { render, screen } from "@testing-library/react";
import Contact from "./Contact";
import { BrowserRouter } from "react-router-dom";
import AuthenticationService from "../../services/AuthenticationService";


jest.mock("../../services/AuthenticationService");

test("displays everything", () => {
  const mockCurrentUser = { username: "admin", password: "password" };
  AuthenticationService.getCurrentUser.mockReturnValueOnce(mockCurrentUser);
  render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );
  const contact = screen.getByText(/Contact/i);
  const para = screen.getByText(
    /Sign up to receive our latest news and offers/i
  );
  expect(contact).toBeInTheDocument();
  expect(para).toBeInTheDocument();
});

test("displays contact with different navbar if not logged in", () => {
  AuthenticationService.getCurrentUser.mockReturnValueOnce(null);
  render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );
  const contact = screen.getByText(/Contact/i);
  const para = screen.getByText(
    /Sign up to receive our latest news and offers/i
  );
  expect(contact).toBeInTheDocument();
  expect(para).toBeInTheDocument();
});