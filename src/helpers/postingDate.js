import { formatDistanceToNow } from 'date-fns';

export const postingDate = postedAt => {
  return formatDistanceToNow(new Date(postedAt), { addSuffix: true });
};
