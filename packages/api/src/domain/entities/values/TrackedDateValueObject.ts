import { ValueObject } from '@piggly/ddd-toolkit';
import moment from 'moment-timezone';

export default class TrackedDateValueObject extends ValueObject<{
	tracked_at: moment.Moment;
}> {
	constructor(date: moment.Moment) {
		super({ tracked_at: date });
	}

	public get tracked_at() {
		return this.props.tracked_at;
	}

	public get day() {
		return this.props.tracked_at.day();
	}

	public get month() {
		return this.props.tracked_at.month();
	}

	public get year() {
		return this.props.tracked_at.year();
	}

	public get hour() {
		return this.props.tracked_at.hour();
	}

	public get minute() {
		return this.props.tracked_at.minute();
	}
}
