import 'testing-library/jest-dom';
import { render, test, expect } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  expect('').toBeInTheDocument();
});
