import { Entity } from '@piggly/ddd-toolkit';
import OperationsValueObject from './values/OperationsValueObject';
import TimeEventTypeValueObject from './values/TimeEventTypeValueObject';
import TrackedDateValueObject from './values/TrackedDateValueObject';
import UserEntity from './UserEntity';

export type TimeEventEntityProps = {
	user: UserEntity;
	tracked_at: TrackedDateValueObject;
	type: TimeEventTypeValueObject;
	operations: OperationsValueObject;
	created_at: moment.Moment;
	updated_at: moment.Moment;
};

export default class TimeEventEntity extends Entity<
	TimeEventEntityProps,
	number
> {
	public get user(): UserEntity {
		return this.props.user;
	}

	public get tracked_at(): TrackedDateValueObject {
		return this.props.tracked_at;
	}

	public get type(): TimeEventTypeValueObject {
		return this.props.type;
	}

	public get operations(): OperationsValueObject {
		return this.props.operations;
	}

	public get created_at(): moment.Moment {
		return this.props.created_at;
	}

	public get updated_at(): moment.Moment {
		return this.props.updated_at;
	}
}
