export function validate(value, validators) {
	const errors = validators
		.map((validator) => validator(value))
		.filter((error) => error !== null);
	return errors.length === 0 ? null : errors[0];
}
