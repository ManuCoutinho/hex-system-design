import Errors from "../constants/Errors";
import Validator from "../utils/Validator";

export default class UserAnemicV4 {
  constructor(
    private _id: number,
    private _name: string,
    private _email: string,
    private _password?: string,
  ) { }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    if (Validator.isEmailValid(email)) {
      this._email = email;
    }
  }

  get password(): string | undefined {
    return this._password;
  }

  set password(password: string | undefined) {
    if (password && password.length < 6) throw new Error(Errors.PASSWORD_INVALID)
    this._password = password;
  }

}