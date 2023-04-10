import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders aciertos link", () => {
    render(<App />);
    const linkElement = screen.getByText(/aciertos/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders errores link", () => {
    render(<App />);
    const linkElement = screen.getByText(/errores/i);
    expect(linkElement).toBeInTheDocument();
  });
});
