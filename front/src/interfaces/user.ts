export interface IUser {
  id?: number | null;
  username?: string | null;
  email?: string;
  password?: string;
  roles?: Array<string>;
}
