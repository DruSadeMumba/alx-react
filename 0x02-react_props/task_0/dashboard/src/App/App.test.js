import React from 'react';
import App from './App';
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
test('renders App without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBeTruthy();
});
