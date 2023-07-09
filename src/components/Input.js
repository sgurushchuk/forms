import styles from './Input.module.css';

export function Input({ error, name, type, placeholder, register }) {
	return (
		<>
			{error && <div className={styles.errorLabel}>{error}</div>}
			<input
				className={styles.signUpInput}
				name={name}
				type={type}
				placeholder={placeholder}
				{...register(name)}
			></input>
		</>
	);
}
