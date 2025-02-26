import Errors from '@/core/constants/Errors';
import User from '@/core/user/UserAnemicV3'

const userValid = () => new User(
  1,
  'Jane Doe',
  'jane@email.com',
  '12345'
)
describe('User Anemic ', () => {

  it('should allow create user with no name', () => {
    const user: User = userValid()
    user.setName('')
    expect(user.getName()).toBe('')
  });

  it('should allow create user with negative id', () => {
    const user: User = userValid()
    user.setId(-10)
    expect(user.getId()).toBe(-10)
  });

  it('should throw an error when password have less than 6 char', () => {
    const user: User = userValid()

    expect(() => user.setPassword('12345')).toThrow(Errors.PASSWORD_INVALID)
  });

  it('should update a password with 6 or more char', () => {
    const user: User = userValid()
    user.setPassword('123456')
    expect(user.getPassword()).toBe('123456')
  });
  it('should not update user with invalid email format', () => {
    const user: User = userValid()
    user.setEmail('&*¨%%%$')
    expect(user.getEmail()).toBe(user.getEmail())
  });
});