import Errors from '@/core/constants/Errors';
import User from '@/core/user/UserAnemicV4'

const userValid = () => new User(
  1,
  'Jane Doe',
  'jane@email.com',
  '12345'
)
describe('User Anemic ', () => {

  it('should allow create user with no name', () => {
    const user: User = userValid()
    user.name = ''
    expect(user.name).toBe('')
  });

  it('should allow create user with negative id', () => {
    const user: User = userValid()
    user.id = -10
    expect(user.id).toBe(-10)
  });

  it('should throw an error when password have less than 6 char', () => {
    const user: User = userValid()

    expect(() => user.password = '12345').toThrow(Errors.PASSWORD_INVALID)
  });

  it('should update a password with 6 or more char', () => {
    const user: User = userValid()
    user.password = '123456'
    expect(user.password).toBe('123456')
  });
  it('should not update email with invalid format', () => {
    const user: User = userValid()
    user.email = '&*¨%%%$'
    expect(user.email).toBe(user.email)
  });

  it('should update email with valid format', () => {
    const user: User = userValid()
    user.email = 'jane@zmail.com.br'
    expect(user.email).toBe('jane@zmail.com.br')
  });
});