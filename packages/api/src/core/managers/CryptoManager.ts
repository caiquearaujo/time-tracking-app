import { EntityID } from '@piggly/ddd-toolkit';
import crypto from 'crypto';
import bcrypt from 'bcrypt';

export default class CryptoManager {
	public static async passwordHash(password: string, salt = 12) {
		return new Promise<string>((resolve, reject) => {
			bcrypt.hash(password, salt, (err, hash) => {
				if (err) {
					return reject(err);
				}

				return resolve(hash);
			});
		});
	}

	public static async passwordCompare(password: string, hash: string) {
		return new Promise<boolean>((resolve, reject) => {
			bcrypt.compare(password, hash, (err, result) => {
				if (err) {
					return reject(err);
				}

				return resolve(result);
			});
		});
	}

	public static generateClientKey() {
		return new EntityID().toString();
	}

	public static generateClientSecret(size = 36) {
		const buffer = crypto.randomBytes(size);

		return buffer
			.toString('base64')
			.replace(/\//g, '_')
			.replace(/\+/g, '-')
			.replace(/=/g, '');
	}
}
