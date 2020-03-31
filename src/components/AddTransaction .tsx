import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import { Input, Button } from '@material-ui/core';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);
    // const addTransaction = (transaction: Transaction) => { };

    const onSubmit = (e: any) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction && addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>

            <form onSubmit={onSubmit}>

                <div className="form-control">
                    {/* <label htmlFor="text">Text</label> */}
                    {/* <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." /> */}
                    <Input type="text" inputProps={{ 'aria-label': 'description' }} value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    {/* <label htmlFor="amount">
                        Amount <br />
                        (negative value means "expense", positive value means "income")</label> */}
                    <Input type="number" value={amount} onChange={(e) => e.target.value && setAmount(parseInt(e.target.value, 10))} placeholder="Enter amount..." />
                </div>
                {/* <button className="btn">Add transaction</button> */}
                <Button type="submit" variant="contained" color="primary">
                    Add transaction
                </Button>
            </form>
        </>
    )
}