import User from '@/core/user/UserAnemicV1'

const userValid: User = {
  id: 1,
  name: 'Jane Doe',
  email: 'jane@email.com',
  password: '12345'
}
describe('User Anemic ', () => {

  it('should allow create user with no name', () => {
    const user: User = {
      ...userValid,
      name: ''
    }
    expect(user.name).toBe('')
  });

  it('should allow create user with negative id', () => {
    const user: User = {
      ...userValid,
      id: -10
    }
    expect(user.id).toBe(-10)
  });

  it('should allow create user with invalid password', () => {
    const user: User = {
      ...userValid,
      password: 'T'
    }
    expect(user.password).toBe('T')
  });

  it('should allow create user with invalid email format', () => {
    const user: User = {
      ...userValid,
      password: '¨&*(¨&'
    }
    expect(user.password).toBe('¨&*(¨&')
  });
});