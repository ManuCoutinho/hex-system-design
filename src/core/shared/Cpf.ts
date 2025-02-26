import Errors from "../constants/Errors"

export default class Cpf {
  readonly value: string
  constructor(value?: string) {
    this.value = value?.replace(/\D/g, '') ?? ''
    if (!Cpf.isValid(this.value)) throw new Error(Errors.CPF_INVALID)
  }


  get checkDigit() {
    return this.value.slice(9)
  }

  get formatted() {
    return this.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }

  static isValid(cpf: string): boolean {
    if (!cpf) return false

    const nums = cpf.replace(/\D/g, '').split('')
    if (nums.length !== 11) return false

    const dv1 = Cpf.validateDV(nums.slice(0, 9), nums[9])
    const dv2 = Cpf.validateDV(nums.slice(1, 10), nums[10])
    return dv1 && dv2
  }

  private static validateDV(digits: string[], dv: string): boolean {
    const factors = [10, 9, 8, 7, 6, 5, 4, 3, 2]
    const total = digits.reduce((total, digit, i) => {
      return total + +digit * factors[i]
    }, 0)

    const rest = total % 11
    const dvCalculated = rest < 2 ? 0 : 11 - rest
    return dvCalculated === +dv
  }
}