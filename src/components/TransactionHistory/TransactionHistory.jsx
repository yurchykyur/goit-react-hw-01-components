import PropTypes from 'prop-types';

import {
  TableTh,
  TableThead,
  TableTbody,
  TableTr,
  TransactionTable,
  TableTd,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <TableThead>
        <TableTr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </TableTr>
      </TableThead>

      <TableTbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableTr key={id}>
              <TableTd>{type}</TableTd>
              <TableTd>{amount}</TableTd>
              <TableTd>{currency}</TableTd>
            </TableTr>
          );
        })}
      </TableTbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
