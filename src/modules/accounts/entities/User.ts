import {
	Column,
	Entity,
	CreateDateColumn,
	PrimaryGeneratedColumn,
} from 'typeorm';

import { Exclude } from 'class-transformer';

@Entity('user')
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column({ unique: true })
	email: string;

	@Exclude()
	@Column()
	password: string;

	@Column()
	avatar: string;

	@CreateDateColumn()
	created_at: Date;
}
