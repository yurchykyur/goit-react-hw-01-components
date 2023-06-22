import PropTypes from 'prop-types';
import getRandomHexColor from './GetRandomColor';

import {
  Container,
  Title,
  StatList,
  StatListItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatListItem
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <StatLabel>{label}</StatLabel>
              <StatPercentage>{percentage}%</StatPercentage>
            </StatListItem>
          );
        })}
      </StatList>
    </Container>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
