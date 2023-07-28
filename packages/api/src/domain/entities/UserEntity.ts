import { Entity } from '@piggly/ddd-toolkit';
import moment from 'moment-timezone';
import UUIDValueObject from './values/UUIDValueObject';
import UserStatusValueObject from './values/UserStatusValueObject';
import EmailValueObject from './values/EmailValueObject';
import PasswordValueObject from './values/PasswordValueObject';
import UsernameValueObject from './values/UsernameValueObject';

export type UserEntityProps = {
	identifier: UUIDValueObject;
	username: UsernameValueObject;
	email: EmailValueObject;
	password: PasswordValueObject;
	status: UserStatusValueObject;
	created_at: moment.Moment;
	updated_at: moment.Moment;
};

export default class UserEntity extends Entity<UserEntityProps, number> {
	public get identifier(): UUIDValueObject {
		return this.props.identifier;
	}

	public get username(): UsernameValueObject {
		return this.props.username;
	}

	public get email(): EmailValueObject {
		return this.props.email;
	}

	public get password(): PasswordValueObject {
		return this.props.password;
	}

	public get status(): UserStatusValueObject {
		return this.props.status;
	}

	public activate(): void {
		this.props.status = new UserStatusValueObject(
			UserStatusValueObject.STATUS_ACTIVE,
		);
		this.props.updated_at = moment().utc();
	}

	public deactivate(): void {
		this.props.status = new UserStatusValueObject(
			UserStatusValueObject.STATUS_INACTIVE,
		);
		this.props.updated_at = moment().utc();
	}

	public get created_at(): moment.Moment {
		return this.props.created_at;
	}

	public get updated_at(): moment.Moment {
		return this.props.updated_at;
	}
}
