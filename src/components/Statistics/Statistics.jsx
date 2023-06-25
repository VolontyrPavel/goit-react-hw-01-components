import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statlist}>
          {stats.map(({ id, label, percentage }) => (
            <StatisticsItem
              key={id}
              label={label}
              percentage={percentage}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
