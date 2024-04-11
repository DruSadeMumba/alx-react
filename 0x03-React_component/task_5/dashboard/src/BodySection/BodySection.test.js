import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import BodySection from "./BodySection";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

configure({ adapter: new Adapter() });

describe('BodySection', () => {
  const wrapper = shallow(
    <BodySection title="test title">
      <p>test children node</p>
    </BodySection>
  );

  it('renders without crashing', () => {
    expect(<BodySection  title='test title'/>);
  });

  it('renders the correct children', () => {
    expect(wrapper.contains(<p>test children node</p>)).toEqual(true);
  });

  it('renders the correct title', () => {
    expect(wrapper.find('h2').text()).toEqual('test title');
  });
});
