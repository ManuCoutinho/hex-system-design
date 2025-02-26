import { v4 as uuid, validate } from 'uuid'
import Errors from '../constants/Errors'


export default class Id {
  readonly value: string
  readonly new: boolean

  constructor(value?: string) {
    this.value = value ?? uuid()
    this.new = !value

    if (!validate(this.value)) throw new Error(Errors.ID_INVALID)
  }

  static get new() {
    return new Id()
  }

  equal(otherId: Id): boolean {
    return this.value === otherId?.value
  }

  different(otherId: Id): boolean {
    return this.value !== otherId?.value
  }
}