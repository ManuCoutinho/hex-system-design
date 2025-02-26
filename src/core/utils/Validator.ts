export default class Validator {

  static join(...errors: (string | null)[]): string[] | null {
    const errorsFiltered = errors.filter((e) => e !== null) as string[]
    return errorsFiltered.length > 0 ? errorsFiltered : null
  }

  static notNull(value: any, error: string): string | null {
    if (value != null) return null
    return error
  }
  static notVoid(value: string | null | undefined, error: string): string | null {
    if (Validator.notNull(value, error)) return error
    return value!.trim() !== '' ? null : error
  }

  static lessThan(value: string | any[], length: number, error: string): string | null {
    return value.length < length ? null : error
  }

  static greaterThan(value: string | any[], minLength: number, error: string): string | null {
    return value.length > minLength ? null : error
  }

  static regex(valor: string, regex: RegExp, error: string): string | null {
    return regex.test(valor) ? null : error
  }

  static isEmailValid(email: string): boolean {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    //[^<>()[\]\.,;:\s@\"] -> valida segmento antes do @
    return regex.test(email)
  }
}