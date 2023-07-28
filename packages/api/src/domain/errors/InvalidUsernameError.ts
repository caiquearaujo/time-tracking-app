import { ResponseError } from '@piggly/fastify-chassis';

export default class InvalidUsernameError extends ResponseError {
	constructor(username: string) {
		super(`Invalid username: ${username}.`);

		this.name = 'InvalidUsernameError';
		this._code = 225;
		this._hint = 'The username must be valid.';
		this._statusCode = 422;
	}
}
