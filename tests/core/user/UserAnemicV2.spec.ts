import User from '@/core/user/UserAnemicV2'

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

  it('should allow create user with invalid password', () => {
    const user: User = userValid()
    user.password = 'T'
    expect(user.password).toBe('T')
  });
  it('should allow create user with invalid email format', () => {
    const user: User = userValid()
    user.email = '&*¨%%%$'
    expect(user.email).toBe('&*¨%%%$')
  });
});