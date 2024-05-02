import notiData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notification', {
  author: user,
  context: message,
});

export const normalizeData = normalize(notiData, [notification]);


export default function getAllNotificationsByUser(userId) {
  const notifications = normalizeData.entities.notification;
  const messages = normalizeData.entities.messages;

  return Object.keys(notifications)
    .filter(id => notifications[id].author === userId)
    .map(id => messages[notifications[id].context]);
}
