import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import App from './App';
import {Notifications} from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

configure({ adapter: new Adapter() });

test('renders App without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBeTruthy();
});

describe('App component', () => {
  it('renders Notifications', () => {
    shallow(<Notifications />);
  });

  it('renders Header', () => {
    shallow(<Header />);
  });

  it('renders Login', () => {
    shallow(<Login />);
  });

  it('renders Footer', () => {
    shallow(<Footer />);
  });
});
