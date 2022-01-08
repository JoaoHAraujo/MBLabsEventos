import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("users")
export class User {
   

  @PrimaryColumn()
  id?: string;

  @Column()
  name?: string;

  @Column()
  age?: number;

  @Column()
  email?: string;

  @Column()
  cpfcnpj?: string;

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
