import { ValueObject } from '@piggly/ddd-toolkit';
import InvalidUsernameError from '@/domain/errors/InvalidUsernameError';

export default class UsernameValueObject extends ValueObject<{
	username: string;
}> {
	constructor(username: string) {
		if (UsernameValueObject.isValid(username) === false) {
			throw new InvalidUsernameError(username);
		}

		super({ username });
	}

	public get raw() {
		return this.props.username;
	}

	public get formatted() {
		return `@${this.props.username}`;
	}

	public static isValid(username: string): boolean {
		return /^[a-zA-Z0-9.-_]+$/.test(username);
	}
}
