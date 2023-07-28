import { ResponseError } from '@piggly/fastify-chassis';

export default class UnknownStatusError extends ResponseError {
	constructor(status: string, available: string[]) {
		super(`Invalid status: ${status}.`);

		this.name = 'UnknownStatusError';
		this._code = 225;
		this._hint = `The value for status is invalid. Allowed statuses: "${available.join(
			'", "',
		)}" `;
		this._statusCode = 422;
	}
}
