import { render, screen } from "@testing-library/react";
import Registration from "./Registration";
import { BrowserRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";
import { React } from "react";

test("display a button to register as normal user", () => {
  render(
    <BrowserRouter>
      <Registration />
    </BrowserRouter>
  );
  const normalUserRegisterField = screen.getByRole("button", {
    name: "Register as a normal user",
  });
  expect(normalUserRegisterField).toBeInTheDocument();
});

test("display a button to register as dance teacher user", () => {
  render(
    <BrowserRouter>
      <Registration />
    </BrowserRouter>
  );
  const danceTeacherRegisterField = screen.getByRole("button", {
    name: "Register as dance teacher",
  });
  expect(danceTeacherRegisterField).toBeInTheDocument();
});

test("successfully registers a normal user", async () => {
  const username = "emilyjanespencer1";
  const password = "disney1";
  const firstName = "Emily";
  const lastName = "Spencer";
  const emailAddress = "emilyspencer@test.com";
  const mockRegistration = jest.fn();

  render(
    <BrowserRouter>
      <Registration
        onSubmit={mockRegistration(
          username,
          password,
          firstName,
          lastName,
          emailAddress
        )}
      />
    </BrowserRouter>
  );

  const registrationNormalUserButton = screen.getByRole("button", {
    name: /^Register as normal user$/i,
  });
  expect(registrationNormalUserButton).toBeInTheDocument();
  await userEvent.click(registrationNormalUserButton);

  await expect(mockRegistration).toHaveBeenCalled();
  await expect(mockRegistration).toHaveBeenCalledTimes(1);
  await expect(mockRegistration).toHaveBeenCalledWith(
    "emilyjanespencer1",
    "disney1",
    "Emily",
    "Spencer",
    "emilyspencer@test.com"
  );
});

test("successfully registers a dance teacher user", async () => {
  const username = "emilyjanespencer2";
  const password = "disney1";
  const firstName = "Emily";
  const lastName = "Spencer";
  const emailAddress = "emilyspencer@test.com";
  const memberCode = "hhhhhh"
  const mockRegistration = jest.fn();

  render(
    <BrowserRouter>
      <Registration
        onSubmit={mockRegistration(
          username,
          password,
          firstName,
          lastName,
          emailAddress,
          memberCode
        )}
      />
    </BrowserRouter>
  );

  const registrationDanceTeacherButton = screen.getByRole("button", {
    name: /^Register as a dance teacher$/i,
  });
  expect(registrationDanceTeacherButton).toBeInTheDocument();
  await userEvent.click(registrationDanceTeacherButton);

  await expect(mockRegistration).toHaveBeenCalled();
  await expect(mockRegistration).toHaveBeenCalledTimes(1);
  await expect(mockRegistration).toHaveBeenCalledWith(
    "emilyjanespencer2",
    "disney1",
    "Emily",
    "Spencer",
    "emilyspencer@test.com",
    "hhhhhh"
  );
});

test("it tests handleDanceTeacherRegistration", async () => {
  const mockHandleDanceTeacherRegistration = jest.fn();
  render(
    <BrowserRouter>
      <Registration />
    </BrowserRouter>
  );
  const registerDanceTeacherButton = screen.getByRole("button", {
    name: /Register as a dance teacher/i,
  });
  await userEvent.click(registerDanceTeacherButton);

  expect(mockHandleDanceTeacherRegistration).toHaveBeenCalled();
  expect(mockHandleDanceTeacherRegistration).toHaveBeenCalledTimes(1);
});


test("it tests handleUserRegistration", async () => {
  const mockHandleUserRegistration = jest.fn();
  render(
    <BrowserRouter>
      <Registration />
    </BrowserRouter>
  );
  const registerUserButton = screen.getByRole("button", {
    name: /Register as normal user/i,
  });
  await userEvent.click(registerUserButton);

  expect(mockHandleUserRegistration).toHaveBeenCalled();
  expect(mockHandleUserRegistration).toHaveBeenCalledTimes(1);
});

test("throws an error message if a field is blank when registering dance teacher", async () => {
  const mockRegistration = jest.fn();
  render(
    <BrowserRouter>
      <Registration />
    </BrowserRouter>
  );
  const registerDanceTeacherButton = screen.getByRole("button", {
    name: /Register as a dance teacher/i,
  });
  await userEvent.click(registerDanceTeacherButton);
  const username = "emilyjanespencer1";
  const password = "disney1";
  const firstName = "Emily";
  const lastName = "Spencer";
  const emailAddress = "emilyspencer@test.com";
  const memberCode = "hhhhhh"

  render(
    <BrowserRouter>
      <Registration
        onSubmit={mockRegistration(
          username,
          password,
          firstName,
          lastName,
          emailAddress,
          memberCode
        )}
      />
    </BrowserRouter>
  );

  userEvent.click(registerDanceTeacherButton);

  const usernameInput = screen.getByText(/Username/i);
  userEvent.type(usernameInput, "emilyjanespencer1");
  const passwordInput = screen.getByText(/Password/i);
  userEvent.type(passwordInput, "disney1");
  const firstNameInput = screen.getByText(/First Name/i);
  userEvent.type(firstNameInput, "Emily");
  const lastNameInput = screen.getByText(/Last Name/i);
  userEvent.type(lastNameInput, "Spencer");
  const emailAddressInput = screen.getByText(/Email Address/i);
  userEvent.type(emailAddressInput, "{space}");


  const registrationButton = screen.getAllByText("Register as a dance teacher")[0];
  expect(registrationButton).toBeEnabled();

  await userEvent.click(registrationButton);
  const error = screen.getByText("This field is required.");
  await expect(error).toBeInTheDocument();
});

test("throws an error message if a field is blank when registering normal user", async () => {
  render(
    <BrowserRouter>
      <Registration />
    </BrowserRouter>
  );
  const registerNormalUserButton = screen.getByRole("button", {
    name: /Register as normal user/i,
  });
  expect(screen.getByText('Register as normal user')).toBeInTheDocument()
  await userEvent.click(registerNormalUserButton);

  const usernameInput = screen.getByText(/Username/i);
  await userEvent.type(usernameInput, "emilyjanespencer1");
  const passwordInput = screen.getByText(/Password/i);
  await userEvent.type(passwordInput, "disney1");
  const firstNameInput = screen.getByText(/First Name/i);
  await userEvent.type(firstNameInput, "Emily");
  const lastNameInput = screen.getByText(/Last Name/i);
  await userEvent.type(lastNameInput, "Spencer");
  const emailAddressInput = screen.getByText(/Email Address/i);
  await userEvent.type(emailAddressInput, "{space}");
  expect(screen.getByText('Email Address')).toBeInTheDocument()

  const registrationButton = screen.getByTestId("register-user-button");

  await userEvent.click(registrationButton);

  expect(
    screen.getByText('Email:')
  ).toBeInTheDocument();
});


