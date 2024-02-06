import Users from "./Users";
import renderer from 'react-test-renderer'

test("Testing methods of class based component", ()=> {
    const componentData = renderer.create(<Users />).getInstance();
    expect(componentData.getUserList("test")).toMatch("test")
})