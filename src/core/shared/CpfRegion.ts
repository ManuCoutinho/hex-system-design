export default class CpfRegion {

  static readonly ALL = [
    new CpfRegion(0, ['RS']),
    new CpfRegion(1, ['DF', 'GO', 'MS', 'MT', 'TO']),
    new CpfRegion(2, ['AC', 'AM', 'AP', 'PA', 'RO', 'RR']),
    new CpfRegion(3, ['CE', 'MA', 'PI']),
    new CpfRegion(4, ['AL', 'PB', 'PE', 'RN']),
    new CpfRegion(5, ['BA', 'SE']),
    new CpfRegion(6, ['MG']),
    new CpfRegion(7, ['ES', 'RJ']),
    new CpfRegion(8, ['SP']),
    new CpfRegion(9, ['PR', 'SC']),
  ]
  /**
   *
   */
  private constructor(readonly code: number, readonly states: string[]) { }

  static readonly RS = CpfRegion.ALL[0]
  static readonly DF_GO_MS_MT_TO = CpfRegion.ALL[1]
  static readonly AC_AM_AP_PA_RO_RR = CpfRegion.ALL[2]
  static readonly CE_MA_PI = CpfRegion.ALL[3]
  static readonly AL_PB_PE_RN = CpfRegion.ALL[4]
  static readonly BA_SE = CpfRegion.ALL[5]
  static readonly MG = CpfRegion.ALL[6]
  static readonly ES_RJ = CpfRegion.ALL[7]
  static readonly SP = CpfRegion.ALL[8]
  static readonly PR_SC = CpfRegion.ALL[9]

  static byCode(code: number): CpfRegion {
    return CpfRegion.ALL[code]
  }

  static byCpf(cpf: string): CpfRegion {
    const code = +cpf.replace(/\D/g, '')[8]
    return CpfRegion.ALL[code]
  }

  equals(region1: CpfRegion): boolean {
    return this.code === region1?.code
  }

  different(region1: CpfRegion): boolean {
    return this.code !== region1?.code
  }
}