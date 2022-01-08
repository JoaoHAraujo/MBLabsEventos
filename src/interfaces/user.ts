export interface IUser {
  id?: string;
  name?: string;
  age?: number;
  email?: string;
  cpfcnpj?: string;
  profile_type?: number;
  password?: string;
}

export interface IUserCheck {
  check(): IUser;
}
