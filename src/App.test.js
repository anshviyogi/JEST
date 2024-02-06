import { render } from "@testing-library/react";
import App from "./App";

test("Snapshot for App file", ()=> {
    const container = render(<App />)
    expect(container).toMatchSnapshot();
})

// Through this, it will throw me an error if I'm gonna change something in the <App /> component because a snapshot of it has already been saved in __snapshot__ folder