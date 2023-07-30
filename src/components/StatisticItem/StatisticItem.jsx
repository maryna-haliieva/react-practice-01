import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

import { IconContext } from 'react-icons';

export const StatisticItem = ({ title, id, total, icon }) => {
  return (
    <StatisticBox key={id}>
      <IconContext.Provider
        value={{ color: 'blue', size: 20}}
      >
        {icon}
      </IconContext.Provider>
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};
