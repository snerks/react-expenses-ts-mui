import React, { useContext } from 'react';
// import { Transaction, TransactionView } from './Transaction';
import { GlobalContext } from '../context/GlobalContext';
import { List, ListItem, /* ListItemIcon, */ ListItemText, /* Divider, */ Button } from '@material-ui/core';
import { TransactionView } from './Transaction';

export const TransactionList = () => {
    const { transactions, deleteTransaction } = useContext(GlobalContext);

    // const transactions: Transaction[] = [];

    return (
        <>
            <h3>History</h3>

            <ul className="list">
                {transactions.map(transaction => (<TransactionView key={transaction.id} transaction={transaction} />))}
            </ul>

            <List component="nav" aria-label="main mailbox folders">
                {
                    transactions.map(transaction => (
                        // <TransactionView key={transaction.id} transaction={transaction} />
                        <ListItem key={transaction.id}>
                            <ListItemText primary={transaction.text + " : " + transaction.amount} />
                            {/* <button 
                                onClick={() => deleteTransaction && deleteTransaction(transaction.id)} className="delete-btn">x</button> */}
                            <Button variant="contained" color="default"
                                onClick={() => deleteTransaction && deleteTransaction(transaction.id)}>
                                X
                                </Button>
                        </ListItem>
                    ))
                }
            </List>
        </>
    )
}