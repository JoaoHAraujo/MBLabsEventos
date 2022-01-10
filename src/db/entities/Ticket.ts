import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { User } from "./User";

@Entity("events")
export class Event {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  buy_date?: Date;

  @Column()
  ticket_code?: string;

  @Column()
  event_id?: string;

  @ManyToOne(() => Event)
  @JoinColumn({ name: "event_id" })
  event?: Event;

  @Column()
  buyer_id?: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "buyer_id" })
  user?: User;

  @CreateDateColumn()
  created_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
