import { formatDistanceToNow, format } from 'date-fns';

export const postingDate = postedAt => {
  return formatDistanceToNow(new Date(postedAt), { addSuffix: true });
};

export const formatDate = date => {
  return format(new Date(date), 'Pp');
};
