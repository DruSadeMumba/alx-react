import notiData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notification', {
  author: user,
  context: message,
});

export default function getAllNotificationsByUser(userId) {
  return notiData
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}

export const normalizeData = normalize(notiData, [notification]);
