import Errors from "@/core/constants/Errors";
import Person from "@/core/person/Person";
import Id from "@/core/shared/Id";
import PersonBuilder from "@/tests/data/PersonBuilder";

describe('Person class', () => {
  it('should throw an error when create a person with empty name', () => {
    expect(() => PersonBuilder.create().withoutName().build()).toThrow(Errors.EMPTY_NAME)
  });
  it('should throw an error when create a person with empty cpf', () => {
    expect(() => PersonBuilder.create().withoutCpf().build()).toThrow(Errors.CPF_INVALID)
  });
  it('should create a valid person object', () => {
    const person = PersonBuilder.create().whitName('Jane Doe').withoutId().build()
    expect(person.name.lastName).toBe('Doe')
    expect(person.id.new).toBeTruthy()
  });

  it('should create a clone of person object with new name', () => {
    const person = PersonBuilder.create().build()
    const newPerson = person.clone({ name: 'Sarah Connor' })
    expect(newPerson.cpf.value).toBe(person.cpf.value)
    expect(newPerson.id.value).toBe(person.id.value)
    expect(newPerson.name.firstName).toBe('Sarah')
  });

  it('should create a clone of person object with new id', () => {
    const person = PersonBuilder.create().build()
    const newPerson = person.clone({ id: Id.new.value })
    expect(newPerson.cpf.value).toBe(person.cpf.value)
    expect(newPerson.id.value !== person.id.value).toBe(true)

  });
});