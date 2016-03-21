import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TransactionForm from '../components/TransactionForm';
import { postTransaction } from '../actions/transactions';
import * as transactionFormActions from '../actions/transactionForm';

class AddTransaction extends Component {
    constructor() {
        super();

        this.onChange = ({ target: { name, value } }) => {
            const { changeModel } = this.props.transactionFormActions;
            changeModel(name, value);
        };

        this.isFormValid = () => {
            const { setErrors } = this.props.transactionFormActions;
            const { transactionModel } = this.props.transactionForm;
            const errors = {};

            if (transactionModel.amount < 1) { errors.amount = 'Введите сумму'; }
            if (!transactionModel.bankId) { errors.bank = 'Выберите банк'; }

            setErrors(errors);

            return !Object.keys(errors).length;
        };

        this.submit = () => {
            if (this.isFormValid()) {
                const { transactionModel: { amount, bankId } } = this.props.transactionForm;
                const { postTransaction } = this.props.transactionActions;
                const { resetModel } = this.props.transactionFormActions;
                postTransaction(bankId, amount);
                resetModel();
            }
        };
    }

    render() {
        const { banks, transactionForm: { transactionModel, errors } } = this.props;

        return (
            <TransactionForm
              banks={banks}
              model={transactionModel}
              errors={errors}
              submit={this.submit}
              onChange={this.onChange}
            />
        );
    }
}

function mapStateToProps({ transactionForm, banks, transactions }) {
    return {
        transactions,
        transactionForm,
        banks,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        transactionFormActions: bindActionCreators(transactionFormActions, dispatch),
        transactionActions: bindActionCreators({ postTransaction }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);
