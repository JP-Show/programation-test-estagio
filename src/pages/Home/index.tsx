import { useState } from 'react'
import { RomanNumeral } from '../../class/RomanNumerals'
import { ArabicNumerals } from '../../class/ArabicNumerals'
import { NounGrind } from '../../components/NounGrid'
export function Home() {
  const [romanNumber, setRomanNumber] = useState<string>('')
  const [number, setNumber] = useState<number>(0)

  const [arabicNumber, setArabicNumber] = useState<string>('')
  const [roman, setRoman] = useState<string>('')

  function showConvert() {
    try {
      const roman = new RomanNumeral(romanNumber.toUpperCase().split(''))
      setNumber(roman.convertForArabicNumerals())
    } catch (error) {
      throw alert('Error - ' + error)
    }
  }
  function showConvertRoman() {
    try {
      const roman = new ArabicNumerals(arabicNumber.split(''))
      setRoman(roman.convertForRoman())
    } catch (error) {
      throw alert('Error - ' + error)
    }
  }
  return (
    <div>
      <h1>Hello World</h1>
      <input
        type="text"
        onChange={value => setRomanNumber(value.target.value)}
      />
      <button onClick={showConvert}>Converter</button>
      <p>{number}</p>
      <input
        type="number"
        onChange={value => setArabicNumber(value.target.value)}
      />
      <button onClick={showConvertRoman}>Converter</button>
      <p>{roman}</p>
      <NounGrind></NounGrind>
    </div>
  )
}
