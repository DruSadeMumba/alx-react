import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CourseList from './CourseList';

configure({ adapter: new Adapter() });

describe("CourseList component", () => {
  it("renders without crashing", () => {
    shallow(<CourseList />);
  });

  it("renders 5 rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(5);
  });
});
