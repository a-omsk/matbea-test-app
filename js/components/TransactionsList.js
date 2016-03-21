import React, { PropTypes } from 'react';
import BankService from '../services/BankService';

const TransactionsList = ({ banks, transactions, removeTransaction }) => {
    return (
        <div className="container">
            <h2>Список транзакций</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Сумма</th>
                        <th>Название банка</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {transactions.items.map(({id, bankId, amount}) => (
                        <tr key={id}>
                            <td>{amount}</td>
                            <td>{BankService.getName(banks, bankId)}</td>
                            <td style={{ cursor: 'pointer' }} onClick={removeTransaction.bind(this, id)}>x</td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionsList
