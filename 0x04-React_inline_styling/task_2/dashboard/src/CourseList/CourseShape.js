import {number, shape, string} from 'prop-types';

let CourseShape = shape({
  id: number.isRequired,
  name: string.isRequired,
  credit: number.isRequired,
});

export default CourseShape;
