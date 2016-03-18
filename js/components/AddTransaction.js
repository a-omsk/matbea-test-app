import React, { Component } from 'react';
import uuid from 'uuid';
import BankStore from '../stores/BankStore';
import TransactionStore from '../stores/TransactionStore';
import TransactionsService from '../services/TransactionsService';
import BankService from '../services/BankService';
import Input from './common/Input';
import Select from './common/Select';

const _setTransactionModel = () => {
    return {
        amount: 0,
        bankId: 1,
    };
};

class AddTransaction extends Component {
    constructor() {
        super();

        this.subscription = BankStore.subscribe(() => {
            this.setState({ banks: BankStore.getState().banks })
        });

        this.state = {
            banks: BankStore.getState().banks,
            transactionModel: _setTransactionModel(),
            errors: {},
        }

        this.onChange = ({ target: { name, value } }) => {
            this.state.transactionModel[name] = value;
            this.setState({ transactionModel: this.state.transactionModel });
        };

        this.isFormValid = () => {
            const { transactionModel } = this.state;
            const errors = {};

            if (transactionModel.amount < 1) { errors.amount = 'Введите сумму'; }
            if (!transactionModel.bankId) { errors.bank = 'Выберите банк'; }

            this.setState({ errors });
            return !Object.keys(errors).length;
        };

        this.submit = () => {
            if (this.isFormValid()) {
                const { transactionModel: { amount, bankId } } = this.state;

                const newTransaction = {
                    id: uuid.v1(),
                    amount: parseInt(amount, 10),
                    bankId: parseInt(bankId, 10),
                };

                TransactionsService.addTransaction(newTransaction).then(status => {
                    TransactionStore.dispatch({
                        type: "ADD_TRANSACTIONS",
                        transactions: [newTransaction],
                    });

                    this.setState({ transactionModel: _setTransactionModel() });
                });

            }
        };
    }

    componentWillUnmount() {
        this.subscription();
    }

    render () {
        return (
            <div className="col-md-4">
                <div>
                    <label htmlFor="amount">Сумма</label>
                    <Input
                      inputType="amount"
                      name="amount"
                      placeholder="Введите сумму…"
                      onChange={this.onChange}
                      value={this.state.transactionModel.amount}
                      error={this.state.errors.amount}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="bankId">Выберите банк</label>
                    <Select
                      name="bankId"
                      onChange={this.onChange}
                      options={this.state.banks}
                      value={this.state.transactionModel.bankId}
                      error={this.state.errors.bank}
                    />
                </div>

                <button className="btn btn-success btn-block" onClick={this.submit}>
                    Добавить транзакцию
                </button>
            </div>
        );
    }
}

export default AddTransaction;
