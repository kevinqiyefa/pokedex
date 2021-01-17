import { useState } from 'react';
import { InputWrapper, ErrorText, SubmitBtn, FormWrapper } from './styles';

const Form = ({ login }) => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [showError, setShowError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (userName === 'username' && password === 'password') {
			login(true);
		} else {
			setShowError(true);
			setTimeout(() => setShowError(false), 3000);
		}
	};

	return (
		<FormWrapper onSubmit={handleSubmit}>
			<InputWrapper>
				<input
					type="text"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
					name="username"
					placeholder="username"
					minLength="5"
					required
				/>
			</InputWrapper>

			<InputWrapper>
				<input
					type="password"
					className="form-control form-control-lg"
					name="password"
					placeholder="password"
					value={password}
					minLength="5"
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				{showError && <ErrorText>* Incorrect username or password.</ErrorText>}
			</InputWrapper>

			<SubmitBtn type="submit" disabled={!(userName && password)}>
				Sign In
			</SubmitBtn>
		</FormWrapper>
	);
};

export default Form;
