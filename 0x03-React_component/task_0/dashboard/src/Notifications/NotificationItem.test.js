import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders with correct value prop', () => {
    const wrapper = shallow(<NotificationItem value="test" />);
    expect(wrapper.text()).toContain('test');
  });

  it('renders with correct type prop', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('.NotificationItem.default').exists()).toBe(true);
  });

  it('renders with correct html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<p>test</p>' }} />);
    expect(wrapper.html()).toContain('<p>test</p>');
  });
});
