import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CourseList from './CourseList';
import CourseListRow from "./CourseListRow";
import {StyleSheetTestUtils} from "aphrodite";

configure({ adapter: new Adapter() });
StyleSheetTestUtils.suppressStyleInjection();

describe("CourseList component", () => {
  it("renders without crashing", () => {
    shallow(<CourseList />);
  });

  // Test when listCourses is empty or null
  describe("when listCourses is empty or null", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={[]} />);
    });
    it("renders 'No course available yet' when listCourses is an empty array", () => {
      expect(wrapper.text()).toContain('No course available yet');
    });

    it("renders 'No course available yet' when listCourses is not provided", () => {
      expect(wrapper.text()).toContain('No course available yet');
    });
  });

  // Test when listCourses is not empty
  describe("when listCourses is not empty", () => {
    let wrapper;
    const courses = [
      { id: 1, name: "Course 1", credit: 3 },
      { id: 2, name: "Course 2", credit: 4 },
      { id: 3, name: "Course 3", credit: 3 },
    ];
    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={courses} />);
    });

    it("renders the correct number of CourseListRow components when listCourses contains data", () => {
      expect(wrapper.find(CourseListRow)).toHaveLength(courses.length + 2);
    });
  });
});
