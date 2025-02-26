import Errors from "../constants/Errors"
import Validator from "../utils/Validator"

export default class PersonName {
  readonly name: string
  constructor(name: string) {
    this.name = name.trim()

    const errors = Validator.join(
      Validator.notVoid(this.name, Errors.EMPTY_NAME)
    )
  }
}