import * as React from 'react';

export interface HeaderProps {
}

export const Header: React.FC = (props: HeaderProps) => {
    return (
        <h2>
            Expense Tracker
        </h2>
    );
}

