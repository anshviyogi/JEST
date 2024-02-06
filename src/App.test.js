import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"
import handleOtherMethod from "./helper"

test("Testing functional component method", ()=> {
    render(<App />)
    const btn = screen.getByTestId("btn1")
    fireEvent.click(btn)
    const output = screen.getByText("hello")
    expect(output).toBeInTheDocument();
})

// To test a method who is not responsible for any UI change, we should export default that function in some other file and test that manually

test("method testing case 2", ()=> {
    expect(handleOtherMethod()).toMatch("hi")
})