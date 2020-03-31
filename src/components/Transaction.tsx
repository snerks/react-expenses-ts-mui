import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
// import { GlobalContext } from '../context/GlobalState';

export interface Transaction {
  id: number;
  amount: number;
  text: string;
}

export interface TransactionViewProps {
  transaction: Transaction;
}

export const TransactionView: React.FC<TransactionViewProps> = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  // const deleteTransaction = (transactionId: number) => { };

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>{sign}${Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction && deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}
