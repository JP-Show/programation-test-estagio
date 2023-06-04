export class ArabicNumerals {
  private arabicNumerals: string[]

  constructor(arabicNumerals: string[]) {
    this.arabicNumerals = arabicNumerals
  }

  private verifyNumber(value: number): string {
    console.log(value)
    switch (value) {
      case 1:
        return 'I'
        break
      case 5:
        return 'V'
        break
      case 10:
        return 'X'
        break
      case 50:
        return 'L'
        break
      case 100:
        return 'C'
        break
      case 500:
        return 'D'
        break
      case 1000:
        return 'M'
        break
      default:
        throw 'Numero romano inexistente'
    }
  }

  private newArrNumbers(): number[] {
    return this.arabicNumerals.map((value, index, arr) => {
      if (arr.length - index == 2) {
        return parseInt(value) * 10
      } else if (arr.length - index == 3) {
        return parseInt(value) * 100
      } else if (arr.length - index == 4) {
        return parseInt(value) * 1000
      } else {
        return parseInt(value) * 1
      }
    })
  }
  convertForRoman(): string {
    let result: string = ''
    this.newArrNumbers().map((value: number) => {
      if (value == 0) {
        return ''
      }
      const indiceZero: number = parseInt(value.toLocaleString().charAt(0))
      if (indiceZero <= 3) {
        const valueBi = value / indiceZero
        for (let i = 0; i < indiceZero; i++) {
          result = result.concat(this.verifyNumber(valueBi))
        }
        return result
      } else if (indiceZero == 4) {
        if (value.toString().length == 1) {
          result = result.concat(this.verifyNumber(1))
          result = result.concat(this.verifyNumber(5))
          return result
        } else if (value.toString().length == 2) {
          result = result.concat(this.verifyNumber(10))
          result = result.concat(this.verifyNumber(50))
          return result
        } else if (value.toString().length == 3) {
          result = result.concat(this.verifyNumber(100))
          result = result.concat(this.verifyNumber(500))
          return result
        }
      } else if (indiceZero == 5) {
        if (value.toString().length == 1) {
          result = result.concat(this.verifyNumber(5))
          return result
        } else if (value.toString().length == 2) {
          result = result.concat(this.verifyNumber(50))
          return result
        } else if (value.toString().length == 3) {
          result = result.concat(this.verifyNumber(500))
          return result
        }
      } else if (indiceZero > 5 && indiceZero <= 8) {
        if (value.toString().length == 1) {
          result = result.concat(this.verifyNumber(5))
          for (let i = 0; i < indiceZero - 5; i++) {
            result = result.concat(this.verifyNumber(1))
          }
          return result
        } else if (value.toString().length == 2) {
          result = result.concat(this.verifyNumber(50))
          for (let i = 0; i < indiceZero - 5; i++) {
            result = result.concat(this.verifyNumber(10))
          }
          return result
        } else if (value.toString().length == 3) {
          result = result.concat(this.verifyNumber(500))
          for (let i = 0; i < indiceZero - 5; i++) {
            result = result.concat(this.verifyNumber(100))
          }
          return result
        }
      } else if (indiceZero == 9) {
        if (value.toString().length == 1) {
          result = result.concat(this.verifyNumber(1))
          result = result.concat(this.verifyNumber(10))
          return result
        } else if (value.toString().length == 2) {
          result = result.concat(this.verifyNumber(10))
          result = result.concat(this.verifyNumber(100))
          return result
        } else if (value.toString().length == 3) {
          result = result.concat(this.verifyNumber(100))
          result = result.concat(this.verifyNumber(1000))
          return result
        }
      }
      return ''
    })
    return result
  }
}
