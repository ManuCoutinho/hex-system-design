import CpfRegion from "@/core/shared/CpfRegion";

describe('CpfRegion class', () => {
  it('should create a CpfRegion of 0 region', () => {
    const region = CpfRegion.byCode(0)
    expect(region.code).toBe(0)
    expect(region.states).toEqual(['RS'])
  });

  it('should create a CpfRegion of 0 region by cpf', () => {
    const region = CpfRegion.byCpf('186.891.710-02')
    expect(region.code).toBe(0)
    expect(region.states).toEqual(['RS'])
  });


  it('should compare regions by equals', () => {
    const regionA = CpfRegion.byCpf('186.891.710-02')
    const regionB = CpfRegion.byCpf('244.155.450-68')
    expect(regionA.equals(regionB)).toBe(true)
    expect(regionA.different(regionB)).toBe(false)
  });

  it('should compare regions by different', () => {
    const regionA = CpfRegion.byCpf('186.891.710-02')
    const regionB = CpfRegion.byCpf('663.522.764-40')
    expect(regionA.different(regionB)).toBe(true)
    expect(regionA.equals(regionB)).toBe(false)
  });

  it('should compare region with undefined value', () => {
    const region = CpfRegion.byCpf('186.891.710-02')
    expect(region.equals(undefined as any)).toBeFalsy()
    expect(region.different(undefined as any)).toBeTruthy()
  });

  it('should create a CpfRegion of SP', () => {
    const region = CpfRegion.SP
    expect(region.code).toBe(8)
    expect(region.states).toEqual(['SP'])
  });

  it('should create a CpfRegion of 3', () => {
    const region = CpfRegion.CE_MA_PI
    expect(region.code).toBe(3)
    expect(region.states).toEqual(['CE', 'MA', 'PI'])
  });
});