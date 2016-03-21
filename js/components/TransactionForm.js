import React, { PropTypes } from 'react';
import Input from './common/Input';
import Select from './common/Select';

const TransactionForm = ({  model, errors, banks: { items }, onChange, submit }) => {
    return (
        <div className="col-md-4">
            <div>
                <label htmlFor="amount">Сумма</label>
                <Input
                  inputType="amount"
                  name="amount"
                  placeholder="Введите сумму…"
                  onChange={onChange}
                  value={model.amount}
                  error={errors.amount}
                />
            </div>

            <div className="form-group">
                <label htmlFor="bankId">Выберите банк</label>
                <Select
                  name="bankId"
                  onChange={onChange}
                  options={items}
                  value={model.bankId}
                  error={errors.bank}
                />
            </div>

            <button className="btn btn-success btn-block" onClick={submit}>
                Добавить транзакцию
            </button>
        </div>
    );
}

export default TransactionForm
