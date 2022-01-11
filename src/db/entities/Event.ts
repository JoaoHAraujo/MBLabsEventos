import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { User } from "./User";

@Entity("events")
export class Event {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  title?: string;

  @Column()
  description?: string;

  @Column()
  date?: Date;

  @Column()
  location?: string;

  @Column()
  quantity?: number;

  @Column()
  price?: number;

  @Column()
  abbreviation?: string;

  @Column()
  owner_id?: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "owner_id" })
  user?: User;

  @CreateDateColumn()
  created_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
