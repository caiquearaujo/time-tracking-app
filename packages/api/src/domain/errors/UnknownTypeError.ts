import { ResponseError } from '@piggly/fastify-chassis';

export default class UnknownTypeError extends ResponseError {
	constructor(type: string, available: string[]) {
		super(`Invalid type: ${type}.`);

		this.name = 'UnknownTypeError';
		this._code = 225;
		this._hint = `The value for type is invalid. Allowed types: "${available.join(
			'", "',
		)}" `;
		this._statusCode = 422;
	}
}
