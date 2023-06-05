export class RomanNumeral {
  private RomanNumerals: string[]
  private testRegex: RegExp = /(\w+),\1,\1,\1/i
  private testRegex2: RegExp = /(V+),(V+)|(L+),(L+)|(D+),(D+) /i

  constructor(RomanNumerals: string[]) {
    this.RomanNumerals = RomanNumerals
  }

  private verifyExist() {
    if (
      this.RomanNumerals.toString().match(this.testRegex) ||
      this.RomanNumerals.toString().match(this.testRegex2)
    ) {
      console.log('caiu aqui')
      throw 'Numero romano inexistente'
    }
    return true
  }

  private verifyNumber(value: string): number {
    switch (value) {
      case 'I':
        return 1
        break
      case 'V':
        return 5
        break
      case 'X':
        return 10
        break
      case 'L':
        return 50
        break
      case 'C':
        return 100
        break
      case 'D':
        return 500
        break
      case 'M':
        return 1000
        break
      default:
        throw 'Numero romano inexistente'
    }
  }

  private romanForNumber(): number[] {
    this.verifyExist()
    return this.RomanNumerals.map(this.verifyNumber)
  }

  convertForArabicNumerals() {
    const arr = this.romanForNumber().reduce(
      (acc: number, curr: number, ind: number, arr: number[]) => {
        if (curr * 5 == arr[ind + 2]) {
          throw 'Número não existe'
        }
        if (curr * 5 == arr[ind + 2] || curr * 5 == arr[ind + 3]) {
          throw 'Número não existe'
        }
        if (
          (curr < arr[ind + 1] || curr * 10 == arr[ind + 1]) &&
          curr * 5 == arr[ind + 1]
        ) {
          console.log('caiu aqui 1 ' + acc + ', ' + curr)
          return acc - curr
        } else if (curr > arr[ind + 1] || arr[ind + 1] == null) {
          console.log('caiu aqui 2 ' + acc + ', ' + curr)
          return acc + curr
        } else if (curr == arr[ind + 1]) {
          console.log('caiu aqui 3 ' + acc + ', ' + curr)
          return acc + curr
        } else if (arr[ind + 1] == null && ind == 0) {
          console.log('caiu aqui 4 ' + acc + ', ' + curr)
          return curr
        } else {
          console.log('caiu aqui no final ' + curr)
          throw 'Número não existe'
        }
      },
      0
    )
    return arr
  }
}
