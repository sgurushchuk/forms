import * as yup from 'yup';

export const signUpInputScheme = yup.object().shape({
	email: yup
		.string()
		.matches(
			/^\S{2,}@\S{2,}\.[a-zA-Z]{2,10}$/,
			'Wrong email. Email should be like example@gmail.com',
		),
	password: yup
		.string()
		.min(6, 'Password length should be at least 6 letters')
		.matches(
			/^\S+$/ && /[A-Z]+/ && /[0-9]+/ && /[\W_]+/ && /[a-z]+/,
			'Password should contain at least one Apper case, lower case, number, symbol letters',
		),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Confirm password should be the same'),
});
