import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  name?: string;

  @Column()
  age?: number;

  @Column()
  email?: string;

  @Column()
  document?: string;

  @Column()
  profile_type?: number;

  @Column()
  password?: string;

  @CreateDateColumn()
  created_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
