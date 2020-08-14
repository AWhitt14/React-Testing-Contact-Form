import React from "react";
import { render, getByLabelText, getByPlaceholderText } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test('test input labels', () => {
  const { getByText, getByTestId } = render(<App />);

  const fName = getByText(/first name/i);
  getByText(/last name/i);
  getByText(/email/i);
  getByText(/message/i);

  const emailLab = getByTestId('emailLab');
  expect(emailLab.htmlFor).toBe('email');
});

test('test placeholder',() => {
  const { getByPlaceholderText } = render(<App />);
  const eInput = getByPlaceholderText('Edd');
  expect(eInput.name).toEqual('firstName');

  expect(getByPlaceholderText('Burke').name).toEqual('lastName');
  expect(getByPlaceholderText('bluebill1049@hotmail.com').name).toEqual('email');
});


test('functionality', () => {
  const { getByPlaceholderText } = render(<App />);
});