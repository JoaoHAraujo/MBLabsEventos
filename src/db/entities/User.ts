import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid"

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


  constructor() {
      if(!this.id) {
          this.id = uuid()
      }
  }
}
