import Errors from "@/core/constants/Errors";
import Person from "@/core/person/Person";
import Id from "@/core/shared/Id";

describe('Person class', () => {
  it('should throw an error when create a person with empty name', () => {
    expect(() => new Person({ name: '', cpf: '' })).toThrow(Errors.EMPTY_NAME)
  });
  it('should create a valid person object', () => {
    const person = new Person({ name: 'Jane Doe', cpf: '255.307.850-18' })
    expect(person.name.lastName).toBe('Doe')
    expect(person.id.new).toBeTruthy()
  });

  it('should create a clone of person object with new name', () => {
    const person = new Person({ name: 'Jane Doe', cpf: '255.307.850-18' })
    const newPerson = person.clone({ name: 'Sarah Connor' })
    expect(newPerson.cpf.value).toBe(person.cpf.value)
    expect(newPerson.id.value).toBe(person.id.value)
    expect(newPerson.name.firstName).toBe('Sarah')
  });

  it('should create a clone of person object with new id', () => {
    const person = new Person({ name: 'Jane Doe', cpf: '255.307.850-18' })
    const newPerson = person.clone({ id: Id.new.value })
    expect(newPerson.cpf.value).toBe(person.cpf.value)
    expect(newPerson.id.value !== person.id.value).toBe(true)
    expect(newPerson.name.lastName).toBe('Doe')
  });
});