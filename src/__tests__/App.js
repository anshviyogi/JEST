import { fireEvent, render, screen } from "@testing-library/react"
import App from "../App"

// All the files inside __tests__ folder doesn't necessary need a .test.js extension

test("Testing something on the UI", ()=> {
  render(<App />)
  let button = screen.getByRole("button")
  let name = screen.getByText("Hey Ansh")

  fireEvent.click(button)

  expect(screen.getByText(/data updated/i)).toBeInTheDocument();
  expect(name).toBeInTheDocument();
})