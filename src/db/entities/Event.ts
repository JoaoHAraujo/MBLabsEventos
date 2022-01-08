import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"

import {User} from "./User"

@Entity("events")
export class Event {
   

  @PrimaryColumn()
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
  owner_id?:string;

  @ManyToOne(()=> User)
  @JoinColumn({name: "owner_id"})
  user?: User;


  @CreateDateColumn()
  created_at?: Date;


  constructor() {
      if(!this.id) {
          this.id = uuid()
      }
  }
}
