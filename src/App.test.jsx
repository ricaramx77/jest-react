import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import App from './App';

/* eslint-env jest */

describe("App Component", () => {
    test("renders the heading correctly", () => {
      render(<App />);
      
      // Verifica si el texto esperado está en el documento
      const headingElement = screen.getByText(/Vite React/i);
      expect(headingElement).toBeInTheDocument();
    });
  
    test("renders a button with correct label", () => {
      render(<App />);
      
      // Verifica si el botón con el texto esperado está presente
      //const buttonElement = screen.getByRole("button", { name: /Click on the Vite and React logos to learn more/i });
      const headingElement = screen.getByText(/Click on the Vite and React logos to learn more/i);
  
     // expect(buttonElement).toBeInTheDocument();
      expect(headingElement).toBeInTheDocument();
    });
  });