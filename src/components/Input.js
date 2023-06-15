import styles from './Input.module.css';

export function Input({
	error,
	name,
	value,
	type,
	placeholder,
	onChange,
	onBlur,
}) {
	return (
		<>
			{error && <div className={styles.errorLabel}>{error}</div>}
			<input
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			></input>
		</>
	);
}
