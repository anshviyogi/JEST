import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"
import dbClean from "./service"

// It will only run once in for all the test cases
beforeAll(()=> {
    // console.log('***********')
    dbClean();
})

// It will run for the number of test cases which are written here
// beforeEach(()=> {
//     console.log('before each hook')
// })

test("Testing UI of App.js 1", () => {
    console.log(1)

    render(<App />)
    let element = screen.getByRole("button")
    fireEvent.click(element)
    let output = screen.getByText("Data Updated")
    expect(output).toBeInTheDocument();
})

test("Testing UI of App.js 2", () => {
    console.log(2)
    render(<App />)
    let element = screen.getByRole("button")
    fireEvent.click(element)
    let output = screen.getByText("Data Updated")
    expect(output).toBeInTheDocument();
})

test("Testing UI of App.js 3", () => {
    console.log(3)

    render(<App />)
    let element = screen.getByRole("button")
    fireEvent.click(element)
    let output = screen.getByText("Data Updated")
    expect(output).toBeInTheDocument();
})

// afterAll(()=> {
//     console.log('After all ___________')
// })

afterEach(()=> {
    console.log('Afer each')
})