import notiData from '../../../../notifications.json';

export default function getAllNotificationsByUser(userId) {
  return notiData
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}
