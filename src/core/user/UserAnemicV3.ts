import Errors from "../constants/Errors";
import Validator from "../utils/Validator";

export default class UserAnemicV3 {
  constructor(
    private id: number,
    private name: string,
    private email: string,
    private password?: string,
  ) { }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    if (Validator.isEmailValid(email)) {
      this.email = email;
    }
  }

  getPassword(): string | undefined {
    return this.password;
  }

  setPassword(password: string): void {
    if (password.length < 6) throw new Error(Errors.PASSWORD_INVALID)
    this.password = password;
  }

}