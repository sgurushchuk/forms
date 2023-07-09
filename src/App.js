import styles from './App.module.css';
import { sendData } from './utils/sendData';
import { Input } from './components/Input';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { signUpInputScheme } from './validatorScheme/signUpInputScheme';
import { yupResolver } from '@hookform/resolvers/yup';

export default function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: { email: '', password: '' },
		resolver: yupResolver(signUpInputScheme),
	});
	const submitButtonRef = useRef(null);
	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const confirmPasswordError = errors.confirmPassword?.message;

	return (
		<div className={styles.App}>
			<form className={styles.signUpForm} onSubmit={handleSubmit(sendData)}>
				<Input
					error={emailError}
					name="email"
					type="email"
					placeholder="Input email"
					register={register}
				/>
				<Input
					error={passwordError}
					name="password"
					type="password"
					placeholder="Input password"
					register={register}
				/>
				<Input
					error={confirmPasswordError}
					name="confirmPassword"
					type="password"
					placeholder="Input confirm password"
					register={register}
				/>
				<button
					className={styles.submitButton}
					ref={submitButtonRef}
					type="submit"
				>
					Sign-up
				</button>
			</form>
		</div>
	);
}
