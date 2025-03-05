import PersonByRegion from "@/core/person/PersonByRegion";
import CpfRegion from "@/core/shared/CpfRegion";
import PersonBuilder from "@/tests/data/PersonBuilder";

describe('PersonByRegion class (massive)', () => {
  it('should group people by region SP', () => {
    const persons = PersonBuilder.createMany(10000)
    const grouped = new PersonByRegion(persons).join()

    const personsOfSP = grouped.get(CpfRegion.SP) ?? []
    const sameRegion = personsOfSP.every(person => person.cpf.region.equals(CpfRegion.SP))

    expect(sameRegion).toBe(true)
  })

});