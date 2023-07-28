import { ValueObject } from '@piggly/ddd-toolkit';
import InvalidEmailAddressError from '@/domain/errors/InvalidEmailAddressError';

export default class EmailValueObject extends ValueObject<{
	email: string;
}> {
	constructor(email: string) {
		if (EmailValueObject.isValid(email) === false) {
			throw new InvalidEmailAddressError(email);
		}

		super({ email });
	}

	public get value() {
		return this.props.email;
	}

	public static isValid(email: string): boolean {
		return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
			email,
		);
	}
}
