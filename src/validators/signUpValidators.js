export function emailValidator(value) {
	return /^\S{2,}@\S{2,}\.[a-zA-Z]{2,10}$/.test(value)
		? null
		: 'Wrong email. Email should be like someemail@gmail.com';
}

export function passwordMinValidator(value) {
	return value.length > 6
		? null
		: 'Password length should be at least 6 letters';
}

export function passwordSymbolsValidator(value) {
	return /^\S+$/.test(value) &&
		/[a-zA-Z]+/.test(value) &&
		/[0-9]+/.test(value) &&
		/[\W_]+/.test(value)
		? null
		: 'Password should contain at least one Apper case, lower case, number, symbol letters';
}
