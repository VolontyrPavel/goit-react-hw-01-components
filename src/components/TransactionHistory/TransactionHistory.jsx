import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { CreateTransactionHistoryMarkup } from './CreateTransactionHistoryMarkup';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
            <CreateTransactionHistoryMarkup 
                key={id} type={type} amount={amount} currency={currency}
            />
        ))} 
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}
