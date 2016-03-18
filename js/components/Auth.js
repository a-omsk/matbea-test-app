import React, { Component } from 'react';
import Input from './common/Input';

const formStyle = {
    margin: 'auto',
};

const titleStyle = {
    textAlign: 'center',
};

const _setCredentials = () => {
    return {
        username: '',
        password: '',
    };
};

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            credentials: _setCredentials(),
            loginErrors: {}
        };

        this.onChange = ({ target: { name, value } }) => {
            this.state.credentials[name] = value;
            this.setState({ credentials: this.state.credentials });
        };

        this.isFormValid = () => {
            const { credentials } = this.state;
            const errors = {};

            if (!credentials.username.length) { errors.username = 'Введите Ваш логин'; }
            if (!credentials.password.length) { errors.password = 'Введите Ваш пароль'; }

            this.setState({ loginErrors: errors });
            return !Object.keys(errors).length;
        };

        this.submit = () => {
            if (this.isFormValid()) {
                this.props.submit(this.state.credentials);
                this.setState({ credentials: _setCredentials() });
            }
        }
    }

    render () {
        return (
            <div style={formStyle} className="col-md-4">
                <h3 style={titleStyle}>Авторизация</h3>

                <Input
                  inputType="username"
                  name="username"
                  placeholder="Имя пользователя"
                  onChange={this.onChange}
                  value={this.state.credentials.username}
                  error={this.state.loginErrors.username}
                />

                <Input
                  inputType="password"
                  name="password"
                  placeholder="Пароль"
                  onChange={this.onChange}
                  value={this.state.credentials.password}
                  error={this.state.loginErrors.password}
                />

                <button className="btn btn-success btn-block" onClick={this.submit}>Войти</button>
            </div>
        );
    }
}

export default Auth;
