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

  static createMany(qty: number = 10) {
    return Array(qty).fill(0).map(() => {
      return PersonBuilder.create().build()
    })
  }

  whitName(name: string): PersonBuilder {
    this.props.name = name
    return this
  }
  withoutName(): PersonBuilder {
    this.props.name = undefined
    return this
  }

  withoutId(): PersonBuilder {
    this.props.id = undefined
    return this
  }
  withId(id: string): PersonBuilder {
    this.props.id = id
    return this
  }

  withoutCpf(): PersonBuilder {
    this.props.cpf = undefined
    return this
  }
  withCpf(cpf: string): PersonBuilder {
    this.props.cpf = cpf
    return this
  }
  build(): Person {
    return new Person(this.props)
  }
}