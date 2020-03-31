import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { Transaction } from '../components/Transaction';

interface GlobalProviderProps {
    children: any;
}

export interface GlobalState {
    transactions: Transaction[];
    deleteTransaction?: Function;
    addTransaction?: Function;
}

// Initial state
const initialState: GlobalState = {
    transactions: [],
    // deleteTransaction: (id: number) => { },
    // addTransaction: (transaction: Transaction) => { },
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = (props: GlobalProviderProps) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id: number) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction: Transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {props.children}
    </GlobalContext.Provider>);
}