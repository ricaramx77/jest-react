import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("renders countElement and buttonElement", () => {
  render(<Counter />);

  // Obtener elementos
  const countElement = screen.getByText(/Count:/i);
  const buttonElement = screen.getByText(/Increment/i);

  // Verificar que están en el documento
  expect(countElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test("increments the count when the button is clicked", () => {
    render(<Counter />);
  
    // Obtener elementos
    const buttonElement = screen.getByText(/Increment/i);

    fireEvent.click(buttonElement);

    const countElement = screen.getByText(/Count: 1/i);
  
    // Verificar que están en el documento
    expect(countElement).toBeInTheDocument();
  });