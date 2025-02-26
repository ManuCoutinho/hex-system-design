import Errors from "@/core/constants/Errors";
import Id from "@/core/shared/Id";

describe('Id class', () => {
  it('should create a new valid id', () => {
    const id = Id.new
    expect(id.value).toHaveLength(36)
    expect(id.new).toBeTruthy()
  });

  it('should throw an error when create a invalid id', () => {
    expect(() => new Id('batatinha')).toThrow(Errors.ID_INVALID)
  });
  it('should create a new valid id starting by a old id', () => {
    const value = Id.new.value
    const id = new Id(value)

    expect(id.value).toHaveLength(36)
    expect(id.new).toBeFalsy()
  });
  it('should should compare two equals ids', () => {
    const id1 = new Id()
    const id2 = new Id(id1.value)

    expect(id1.equal(id2)).toBeTruthy()
    expect(id1.different(id2)).toBeFalsy()
  });
  it('should should compare two different ids', () => {
    const id1 = new Id()
    const id2 = new Id()

    expect(id1.equal(id2)).toBeFalsy()
    expect(id1.different(id2)).toBeTruthy()
  });
  it('should should compare id with undefined value', () => {
    const id1 = new Id()


    expect(id1.equal(undefined as any)).toBeFalsy()
    expect(id1.different(undefined as any)).toBeTruthy()
  });
});