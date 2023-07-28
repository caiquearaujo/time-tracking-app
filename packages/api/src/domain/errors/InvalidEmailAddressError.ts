import { ResponseError } from '@piggly/fastify-chassis';

export default class InvalidEmailAddressError extends ResponseError {
	constructor(email: string) {
		super(`Invalid e-mail: ${email}.`);

		this.name = 'InvalidEmailAddressError';
		this._code = 225;
		this._hint = 'The e-mail address must be valid.';
		this._statusCode = 422;
	}
}
