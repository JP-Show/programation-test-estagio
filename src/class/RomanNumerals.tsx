export class RomanNumeral {
  private RomanNumerals: string[]

  constructor(RomanNumerals: string[]) {
    this.RomanNumerals = RomanNumerals
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
    return this.RomanNumerals.map(this.verifyNumber)
  }

  convertForArabicNumerals() {
    const arr = this.romanForNumber().reduce(
      (acc: number, curr: number, ind: number, arr: number[]) => {
        if (
          (curr < arr[ind + 1] && curr * 10 == arr[ind + 1]) ||
          curr * 5 == arr[ind + 1]
        ) {
          console.log('caiu aqui 1')
          return acc - curr
        } else if (curr > arr[ind + 1] || arr[ind + 1] == null) {
          console.log('caiu aqui 2' + acc + ', ' + curr)
          return acc + curr
        } else if (curr == arr[ind + 1]) {
          return acc + curr
        } else if (arr[ind + 1] == null && ind == 0) {
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
