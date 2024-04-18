import {number, shape, string} from 'prop-types';

let NotificationItemShape = shape({
  id: number.isRequired,
  html: shape({
    __html: string,
  }),
  type: string.isRequired,
  value: string,
});

export default NotificationItemShape;
