import { ValueObject } from '@piggly/ddd-toolkit';
import CryptoManager from '@/core/managers/CryptoManager';

export default class PasswordValueObject extends ValueObject<{
	raw: string;
	hash: string;
}> {
	constructor(value?: string, is_hashed = false) {
		if (is_hashed && !value) {
			throw new Error('Hashed secret cannot be empty.');
		}

		super({
			raw: is_hashed ? '' : value || CryptoManager.generateClientSecret(),
			hash: is_hashed ? (value as string) : '',
		});
	}

	public get value() {
		if (this.isHashed()) {
			return this.props.hash;
		}

		return this.props.raw;
	}

	public isHashed(): boolean {
		return this.props.hash !== '';
	}

	public async hash() {
		if (this.isHashed()) {
			return new PasswordValueObject(this.props.hash, true);
		}

		return new PasswordValueObject(
			await CryptoManager.passwordHash(this.props.raw),
			true,
		);
	}

	public async compareTo(secret: string) {
		if (this.isHashed()) {
			return CryptoManager.passwordCompare(secret, this.props.hash);
		}

		return secret === this.props.raw;
	}
}
