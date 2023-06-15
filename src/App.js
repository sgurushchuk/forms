import { useRef, useState } from 'react';
import styles from './App.module.css';
import { sendData } from './utils/sendData';
import { validate } from './utils/validate';
import { Input } from './components/Input';
import {
	passwordMinValidator,
	emailValidator,
	passwordSymbolsValidator,
} from './validators/signUpValidators';

export function App() {
	const [signUpData, setSignUpData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [error, setError] = useState({
		emailError: null,
		passwordError: null,
		confirmPasswordError: null,
	});

	const submitButtonRef = useRef(null);

	const { email, password, confirmPassword } = signUpData;
	const { emailError, passwordError, confirmPasswordError } = error;
	const isFormValid =
		emailError == null &&
		passwordError == null &&
		confirmPasswordError == null &&
		email !== '' &&
		password !== '' &&
		confirmPassword !== '' &&
		confirmPassword === password;

	function onChange(target) {
		setSignUpData({ ...signUpData, [target.name]: target.value });
		isFormValid && submitButtonRef.current.focus();
	}

	function onBlur(target, validator) {
		setError({
			...error,
			[`${target.name}Error`]: validator,
		});
	}

	return (
		<div className={styles.AppHeader}>
			<form onSubmit={(event) => sendData(event, signUpData)}>
				<Input
					error={emailError}
					name="email"
					type="email"
					value={email}
					placeholder="Input your email"
					onChange={({ target }) => onChange(target)}
					onBlur={({ target }) => {
						onBlur(target, validate(email, [emailValidator]));
					}}
				/>
				<Input
					error={passwordError}
					name="password"
					type="password"
					value={password}
					placeholder="Input password"
					onChange={({ target }) => onChange(target)}
					onBlur={({ target }) => {
						onBlur(
							target,
							validate(password, [
								passwordMinValidator,
								passwordSymbolsValidator,
							]),
						);
					}}
				/>
				<Input
					error={confirmPasswordError}
					name="confirmPassword"
					type="password"
					value={confirmPassword}
					placeholder="Confirm password"
					onChange={({ target }) => onChange(target)}
					onBlur={({ target }) => {
						onBlur(
							target,
							confirmPassword === password
								? null
								: 'Confirm pass should be the same as pass',
						);
					}}
				/>
				<button ref={submitButtonRef} type="submit" disabled={!isFormValid}>
					Sign-up
				</button>
			</form>
		</div>
	);
}

export default App;
