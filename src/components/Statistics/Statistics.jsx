import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const icons = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor/>,
];

export const Statistics = ({ title, data }) => {
  return (
    <>
      <div>
        {title && <StatisticTitle>{title}</StatisticTitle>}
        <StatisticsList>
          {data.map((el, index) => {
            return (
              <StatisticItem id={el.id} title={el.title} total={el.total} icon={icons[index]}/>
            );
          })}
        </StatisticsList>
      </div>
    </>
  );
};
