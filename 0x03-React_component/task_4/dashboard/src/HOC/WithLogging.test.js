import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import WithLogging from "./WithLogging";

configure({ adapter: new Adapter() });

const spy = jest.spyOn(console, "log").mockImplementation();
describe('WithLogging HOC', () => {
  afterEach(() => {
    spy.mockRestore();
  });

  it('logs mount and unmount for pure html components', () => {
    const TestComp = () => <p>Dru</p>;
    TestComp.displayName = 'TestComp';
    const WrappedComponent = WithLogging(TestComp);
    const wrapper = shallow(<WrappedComponent />);

    expect(spy).toHaveBeenCalledWith('Component TestComp is mounted');
    wrapper.unmount();
    expect(spy).toHaveBeenCalledWith('Component TestComp is going to unmount');

  });

  it('logs mount and unmount for Login component', () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    const Login = () => <div>Dru</div>;
    Login.displayName = 'Login';
    const WrappedComponent = WithLogging(Login);
    const wrapper = shallow(<WrappedComponent />);

    expect(spy).toBeCalledTimes(1);
    wrapper.unmount();
    expect(spy).toBeCalledTimes(2);
  });
});
