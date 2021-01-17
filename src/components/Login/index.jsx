import React from 'react';
import { Redirect } from 'react-router-dom';

import Form from '../Form';
import LoginWarpper from './styles/LoginWrapper';

const Login = ({ setIsAuth, isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}
	return (
		<LoginWarpper>
			<Form login={setIsAuth} />
			<p>* Username: username, Password: password</p>
		</LoginWarpper>
	);
};

export default Login;
