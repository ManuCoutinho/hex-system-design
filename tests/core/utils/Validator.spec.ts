
import Validator from '@/core/utils/Validator'
const errorMsg = 'Invalid value'
describe('Validator.lessThan', () => {
  it('should return null with text less than max size', () => {
    const error = Validator.lessThan('test', 5, errorMsg)
    expect(error).toBeNull()
  });

  it('should return error with text greater than max size', () => {
    const error = Validator.lessThan('foo bar', 5, errorMsg)
    expect(error).toBe(errorMsg)
  });
});

describe('Validator.notVoid', () => {
  it('should return null when not receive a text', () => {
    const error = Validator.notVoid('bar', errorMsg)
    expect(error).toBeNull()
  });

  it('should return error when receive a empty string', () => {
    const error = Validator.notVoid('   ', errorMsg)
    expect(error).toBe(errorMsg)
  });

  it('should return error when receive a invalid string', () => {
    const error1 = Validator.notVoid(null, errorMsg)
    const error2 = Validator.notVoid(undefined, errorMsg)
    expect(error1).toBe(errorMsg)
    expect(error2).toBe(errorMsg)
  });
});

describe('Validator.notNull', () => {
  it('should return null when receive a text', () => {
    const error = Validator.notNull('foo', errorMsg)
    expect(error).toBeNull()
  });

  it('should return error when receive a text null', () => {
    const error = Validator.notNull(null, errorMsg)
    expect(error).toBe(errorMsg)
  });
});

describe('Validator.join', () => {
  it('should join a list of errors', () => {
    const errors = Validator.join(
      Validator.notVoid('', errorMsg),
      Validator.notNull(null, 'error 2')
    )

    expect(errors?.join(', ')).toBe('Invalid value, error 2')
  });

  it('should return null when not have errors', () => {
    const errors = Validator.join(
      Validator.notVoid('foo', errorMsg),
      Validator.notNull('bar', 'error 2')
    )

    expect(errors).toBeNull()
  });
});

describe('Validator.greaterThan', () => {
  it('should return null with text greater than min size', () => {
    const error = Validator.greaterThan('testando', 5, errorMsg)
    expect(error).toBeNull()
  });

  it('should return error with text greater than max size', () => {
    const error = Validator.greaterThan('foo', 5, errorMsg)
    expect(error).toBe(errorMsg)
  });
});

describe('Validator.regex', () => {
  it('should return null with text match with regex', () => {
    const error = Validator.regex('testando', /^[a-zA-ZÀ-ú'-\.\s]+$/, errorMsg)
    expect(error).toBeNull()
  });

  it('should return error with text greater than max size', () => {
    const error = Validator.regex('foo@123', /^[a-zA-ZÀ-ú'-\.\s]+$/, errorMsg)
    expect(error).toBe(errorMsg)
  });
});