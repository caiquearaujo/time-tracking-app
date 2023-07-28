import { ValueObject } from '@piggly/ddd-toolkit';
import UnknownStatusError from '@/domain/errors/UnknownStatusError';

export default class UserStatusValueObject extends ValueObject<{
	status: string;
}> {
	public static STATUS_ACTIVE = 'active';

	public static STATUS_INACTIVE = 'inactive';

	constructor(status: string) {
		if (UserStatusValueObject.isValid(status) === false) {
			throw new UnknownStatusError(
				status,
				UserStatusValueObject.available(),
			);
		}

		super({ status });
	}

	public get value(): string {
		return this.props.status;
	}

	public isActive(): boolean {
		return this.props.status === 'active';
	}

	public isInactive(): boolean {
		return this.props.status === 'inactive';
	}

	public static isValid(status: string): boolean {
		return UserStatusValueObject.available().includes(status);
	}

	public static available(): string[] {
		return ['active', 'inactive'];
	}
}
