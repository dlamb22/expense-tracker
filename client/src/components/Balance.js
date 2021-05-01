import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utilities/format';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 className={total < 0 ? 'balminus' : 'balplus'}>
        ${numberWithCommas(total)}
      </h1>
    </>
  );
};

export default Balance;
