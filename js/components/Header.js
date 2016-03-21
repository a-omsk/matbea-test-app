import React from 'react';
import { Link } from 'react-router';

const inline = {
    display: 'inline-block',
    marginLeft: '15px',
};

const Header = (props) => {
    const restristedContent = props.isAuthorized ? (
        <div>
        <div style={inline}>
            <Link to={{ pathname: '/user/transactions' }}>
                <h5>Список транзакций</h5>
            </Link>
        </div>

        <div style={inline}>
            <Link to={{ pathname: '/user/add' }}>
                <h5>Добавить транзакцию</h5>
            </Link>
        </div>

        <div style={inline}>
            <Link to={{ pathname: '/user/logout' }}>
                <h5>Выйти</h5>
            </Link>
        </div>
        </div>
    ) : null;

    return (
        <div className="page-header">
            <div className="form-inline">
                <div style={inline}>
                    <h1>Matbea test app</h1>
                </div>
            </div>

            {restristedContent}
        </div>
    );
}

export default Header;
