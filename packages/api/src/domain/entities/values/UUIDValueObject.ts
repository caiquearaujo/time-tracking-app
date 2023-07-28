import { EntityID, ValueObject } from '@piggly/ddd-toolkit';

export default class UUIDValueObject extends ValueObject<{
	key: string;
}> {
	constructor(key?: string) {
		super({ key: key || new EntityID().toString() });
	}

	public get value() {
		return this.props.key;
	}
}
