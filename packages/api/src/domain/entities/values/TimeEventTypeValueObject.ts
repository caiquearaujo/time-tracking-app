import { ValueObject } from '@piggly/ddd-toolkit';
import UnknownTypeError from '@/domain/errors/UnknownTypeError';

export default class TimeEventTypeValueObject extends ValueObject<{
	type: string;
}> {
	public static TYPE_ARRIVE = 'arrive';

	public static TYPE_BREAK = 'break';

	public static TYPE_RETURN = 'return';

	public static TYPE_EXIT = 'exit';

	constructor(type: string) {
		if (TimeEventTypeValueObject.isValid(type) === false) {
			throw new UnknownTypeError(type, TimeEventTypeValueObject.available());
		}

		super({ type });
	}

	public get value(): string {
		return this.props.type;
	}

	public isAnArrive(): boolean {
		return this.props.type === TimeEventTypeValueObject.TYPE_ARRIVE;
	}

	public isABreak(): boolean {
		return this.props.type === TimeEventTypeValueObject.TYPE_BREAK;
	}

	public isAReturn(): boolean {
		return this.props.type === TimeEventTypeValueObject.TYPE_RETURN;
	}

	public isAnExit(): boolean {
		return this.props.type === TimeEventTypeValueObject.TYPE_EXIT;
	}

	public static isValid(type: string): boolean {
		return TimeEventTypeValueObject.available().includes(type);
	}

	public static available(): string[] {
		return [
			TimeEventTypeValueObject.TYPE_ARRIVE,
			TimeEventTypeValueObject.TYPE_BREAK,
			TimeEventTypeValueObject.TYPE_RETURN,
			TimeEventTypeValueObject.TYPE_EXIT,
		];
	}
}
