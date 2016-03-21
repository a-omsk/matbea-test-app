import React, { Component } from 'react';
import Input from '../components/common/Input';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import * as authFormActions from '../actions/authForm';
import * as userActions from '../actions/user';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.onChange = ({ target: { name, value } }) => {
            const { changeModel } = this.props.authFormActions;
            changeModel(name, value);
        };

        this.isFormValid = () => {
            const { setErrors } = this.props.authFormActions;
            const { credentials } = this.props.authForm;
            const errors = {};

            if (!credentials.username.length) { errors.username = 'Введите имя пользователя'; }
            if (credentials.password.length < 6) { errors.password = 'Слишком короткий пароль'; }

            setErrors(errors);

            return !Object.keys(errors).length;
        };

        this.submit = () => {
            if (this.isFormValid()) {
                const { login } = this.props.userActions;
                const { resetModel } = this.props.authFormActions;
                login();
                resetModel();
                hashHistory.push('/user/transactions');
            }
        };
    }

    render() {
        const { credentials, errors } = this.props.authForm;

        return (
            <div className=" auth-form col-md-4">
                <h3>Авторизация</h3>

                <Input
                  inputType="username"
                  name="username"
                  placeholder="Имя пользователя"
                  onChange={this.onChange}
                  value={credentials.username}
                  error={errors.username}
                />

                <Input
                  inputType="password"
                  name="password"
                  placeholder="Пароль"
                  onChange={this.onChange}
                  value={credentials.password}
                  error={errors.password}
                />

                <button className="btn btn-success btn-block" onClick={this.submit}>Войти</button>
            </div>
        );
    }
}

function mapStateToProps({ authForm }) {
    return { authForm };
}

function mapDispatchToProps(dispatch) {
    return {
        authFormActions: bindActionCreators(authFormActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
