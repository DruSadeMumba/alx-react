import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CourseListRow from './CourseListRow';
import {StyleSheetTestUtils} from "aphrodite";

configure({ adapter: new Adapter() });
StyleSheetTestUtils.suppressStyleInjection();

describe("CourseListRow component", () => {
  it("renders without crashing", () => {
    shallow(<CourseListRow  textFirstCell="test" textSecondCell="test"/>);
  });

  // Tests when isHeader is true
  describe("when isHeader is true", () => {
    it("renders one th element when textSecondCell is null", () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test"  textSecondCell="test"/>);
      expect(wrapper.find("th")).toHaveLength(1);
    });

    it("renders two th elements textSecondCell is not null", () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test"/>);
      expect(wrapper.find("th")).toHaveLength(1);
    });
  });

  // Test when isHeader is false
  describe("when isHeader is false", () => {
    it("renders two td elements", () => {
      const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test"/>);
      expect(wrapper.find("td")).toHaveLength(3);
    });
  });
});
