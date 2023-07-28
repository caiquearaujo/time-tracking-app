import { ValueObject } from '@piggly/ddd-toolkit';

export default class OperationsValueObject extends ValueObject<{
	deletable: boolean;
	updatable: boolean;
}> {
	constructor(deletable: boolean, updatable: boolean) {
		super({ deletable, updatable });
	}

	public get deletable() {
		return this.props.deletable;
	}

	public get updatable() {
		return this.props.updatable;
	}
}
