export class Noun {
  private _height: number = 1
  private _weight: number = 1
  private _pX: number
  private _pY: number

  constructor(pX: number, pY: number) {
    this._pX = pX
    this._pY = pY
  }
  get pX() {
    return this._pX
  }
  set pX(value: number) {
    this._pX = value
  }
  get pY() {
    return this._pY
  }
  set pY(value: number) {
    this._pY = this._pY
  }
  get height() {
    return this._height
  }
  get weight() {
    return this._weight
  }
  public getN() {
    return {
      x: this._pY - 1,
      y: this._pX
    }
  }
  public getS() {
    return {
      x: this._pY + 1,
      y: this._pX
    }
  }
  public getL() {
    return {
      x: this._pY,
      y: this._pX + 1
    }
  }
  public getO() {
    return {
      x: this._pY,
      y: this._pX - 1
    }
  }
  public getNE() {
    return {
      x: this._pY - 1,
      y: this._pX + 1
    }
  }
  public getNO() {
    return {
      x: this._pY - 1,
      y: this._pX - 1
    }
  }
  public getSO() {
    return {
      x: this._pY + 1,
      y: this._pX - 1
    }
  }
  public getSE() {
    return {
      x: this._pY + 1,
      y: this._pX + 1
    }
  }
}
