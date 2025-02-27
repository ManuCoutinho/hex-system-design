import Person from "@/core/person/Person";
import { faker } from '@faker-js/faker'
import { generate } from 'gerador-validador-cpf'
import Id from "@/core/shared/Id";
import type { PersonProps } from "@/core/person/Person";

export default class PersonBuilder {
  private constructor(private props: PersonProps) { }

  static create() {
    return new PersonBuilder({
      id: Id.new.value,
      name: faker.person.fullName(),
      cpf: generate(),
    })
  }

  build(): Person {
    return new Person(this.props)
  }
}