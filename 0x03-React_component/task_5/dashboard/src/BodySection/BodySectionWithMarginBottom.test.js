import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import BodySection from "./BodySection";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

configure({ adapter: new Adapter() });

describe('BodySectionWithMarginBottom', () => {
  const wrapper = shallow(
    <BodySectionWithMarginBottom title="test title"></BodySectionWithMarginBottom>
  );

  it('renders without crashing', () => {
    shallow(<BodySectionWithMarginBottom title="test title"></BodySectionWithMarginBottom>);
  });

  it('renders the body section', () => {
    expect(wrapper.find('BodySection')).toHaveLength(1);
    expect(wrapper.find('BodySection').exists()).toBeTruthy();
    expect(wrapper.find('BodySection').html()).toEqual('<div class="bodySection"><h2>test title</h2></div>');
  });
});
