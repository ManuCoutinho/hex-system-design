import Cpf from "../shared/Cpf"
import Id from "../shared/Id"
import PersonName from "../shared/PersonName"

export interface PersonProps {
  name?: string
  cpf?: string
  id?: string
}

export default class Person {
  readonly props: PersonProps

  readonly name: PersonName
  readonly cpf: Cpf
  readonly id: Id

  constructor(
    props: PersonProps
  ) {
    this.id = new Id(props.id)
    this.name = new PersonName(props.name)
    this.cpf = new Cpf(props.cpf)
    this.props = { ...props, id: this.id.value }
  }

  clone(newProps: PersonProps) {
    return new Person({ ...this.props, ...newProps })
  }
}