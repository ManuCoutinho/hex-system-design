import Errors from "@/core/constants/Errors";
import Cpf from "@/core/shared/Cpf";

describe('CPF class', () => {
  it('should return invalid cpf (false) for empty string', () => {
    expect(Cpf.isValid('')).toBeFalsy()
  });
  it('should return invalid cpf (false) for incomplete string', () => {
    expect(Cpf.isValid('123')).toBe(false)
    expect(Cpf.isValid('1234')).toBe(false)
    expect(Cpf.isValid('1234567')).toBe(false)
    expect(Cpf.isValid('123.456.789-0')).toBe(false)
  });
  it('should return invalid cpf (false) for invalid dv', () => {
    expect(Cpf.isValid('123.456.789-00')).toBe(false)
  });

  it('should return valid cpf (true) for valid dv', () => {
    expect(Cpf.isValid('280.012.389−38')).toBe(true)
    expect(Cpf.isValid('346.885.650-46')).toBe(true)
    expect(Cpf.isValid('028.777.810-03')).toBe(true)
    expect(Cpf.isValid('088.535.530-06')).toBe(true)
  });
  it('should return cpf dv', () => {
    expect(new Cpf('280.012.389−38').checkDigit).toBe('38')
    expect(new Cpf('346.885.650-46').checkDigit).toBe('46')
    expect(new Cpf('028.777.810-03').checkDigit).toBe('03')
    expect(new Cpf('088.535.530-06').checkDigit).toBe('06')
  })

  it('should throw an error for cpf with empty string', () => {
    expect(() => new Cpf()).toThrow(Errors.CPF_INVALID)
    expect(() => new Cpf('')).toThrow(Errors.CPF_INVALID)
  });

  it('should throw an error for cpf with incomplete string', () => {
    expect(() => new Cpf('123')).toThrow(Errors.CPF_INVALID)
    expect(() => new Cpf('1234')).toThrow(Errors.CPF_INVALID)
    expect(() => new Cpf('1234567')).toThrow(Errors.CPF_INVALID)
    expect(() => new Cpf('123.456.789-0')).toThrow(Errors.CPF_INVALID)
  });

  it('should  throw an error for cpf with invalid dv', () => {
    expect(() => new Cpf('123.456.789-00')).toThrow(Errors.CPF_INVALID)
  });
  it('should return formatted cpf', () => {
    expect(new Cpf('28001238938').formatted).toBe('280.012.389-38')
    expect(new Cpf('34688565046').formatted).toBe('346.885.650-46')
    expect(new Cpf('02877781003').formatted).toBe('028.777.810-03')
    expect(new Cpf('088.535.530-06').formatted).toBe('088.535.530-06')
  });
  it('should return a cpf value', () => {
    expect(new Cpf('28001238938').value).toBe('28001238938')
    expect(new Cpf('34688565046').value).toBe('34688565046')
    expect(new Cpf('028.777.810-03').value).toBe('02877781003')
    expect(new Cpf('088.535.530-06').value).toBe('08853553006')
  });
});