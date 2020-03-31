// import * as React from 'react';

// export interface BalanceProps {
// }

// export const Balance: React.FC = (props: BalanceProps) => {
//     return (
//         <>
//             <h4>Your Balance</h4>
//             <h1 id="balance">$0.00</h1>
//         </>
//     );
// }

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
// import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}