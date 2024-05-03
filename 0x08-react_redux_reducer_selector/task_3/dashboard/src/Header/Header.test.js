import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import {StyleSheetTestUtils} from "aphrodite";
import AppContext from "../App/AppContext";
import { JSDOM } from 'jsdom';

configure({ adapter: new Adapter() });
const { document } = new JSDOM('<!doctype html><html lang=""><body></body></html>').window;
global.document = document;
global.window = document.defaultView;
describe('Header component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Header shouldRender/>,
      {context: AppContext}
    );
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    expect(wrapper.render()).not.toBe(undefined);
  });

  it('renders img and h1 tags', () => {
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
