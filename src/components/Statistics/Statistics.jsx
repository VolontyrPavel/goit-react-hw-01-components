import PropTypes from 'prop-types';
import { CreateStatisticsMarkup } from './CreateStatisticsMarkup';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>

        <ul className={css.statlist}>
          {stats.map(({ id, label, percentage }) => (
            <CreateStatisticsMarkup
              key={id}
              label={label}
              percentage={percentage}
            />
          ))}
        </ul>
      </section>}
    </>
  );
};

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
