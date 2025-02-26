import Cpf from "../shared/Cpf"
import Entity, { EntityProps } from "../shared/Entity"
import Id from "../shared/Id"
import PersonName from "../shared/PersonName"

export interface PersonProps extends EntityProps {
  name?: string
  cpf?: string
}

export default class Person extends Entity<Person, PersonProps> {
  readonly name: PersonName
  readonly cpf: Cpf


  constructor(
    props: PersonProps
  ) {
    super(props)
    this.name = new PersonName(props.name)
    this.cpf = new Cpf(props.cpf)
  }

}