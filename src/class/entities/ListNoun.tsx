import { Noun } from './Noun'

const a = [new Noun(1, 2), new Noun(2, 2), new Noun(1, 2)]
class ListNoun {
  private _listNoun: Noun[]

  constructor(listNoun: Noun[]) {
    this._listNoun = listNoun
  }
  public get listNoun() {
    return this._listNoun
  }
  public set listNoun(_listNoun: Noun[]) {
    this._listNoun = _listNoun
  }
  public removeListNoun(noun: Noun): void {
    this.listNoun = this._listNoun.filter(value => {
      value.pX == noun.pX && value.pY == noun.pY
    })
  }

  public addListNoun(noun: Noun): void {
    this._listNoun.push(noun)
  }
}
