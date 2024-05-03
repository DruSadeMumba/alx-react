import { selectCourse, unSelectCourse } from './courseActionCreators';

describe('course Action Creators', () => {
  const index = 1;
  it('selectCourse', () => {
    const action = selectCourse(index);
    expect(action).toEqual(selectCourse(index));
  });

  it('unSelectCourse', () => {
    const action = unSelectCourse(index);
    expect(action).toEqual(unSelectCourse(index));
  });
});
