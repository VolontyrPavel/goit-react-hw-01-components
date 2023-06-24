import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const CreateStatisticsMarkup = ( { label, percentage }) => {
    return (
        <li className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}> {percentage}%</span>   
        </li>
    )
}

CreateStatisticsMarkup.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}



