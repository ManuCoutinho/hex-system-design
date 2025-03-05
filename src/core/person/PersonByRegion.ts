
import CpfRegion from "../shared/CpfRegion";
import Person from "./Person";

export default class PersonByRegion {
  /**
   * Domain service that groups people by region
   */
  constructor(private persons: Person[]) { }


  join(): Map<CpfRegion, Person[]> {
    return this.persons.reduce((map, person) => {
      const region = person.cpf.region
      const personsOfRegion = map.get(region) ?? []
      personsOfRegion.push(person)
      map.set(region, personsOfRegion)
      return map
    }, new Map<CpfRegion, Person[]>())
  }
}