import { Canvas } from './Canvas'

export interface TNoun {
  alive: number | boolean
  x: number
  y: number
}

export class GameOfLife {
  private _canvas: Canvas
  private _boardSize: {
    width: number
    height: number
  }
  private _nounSize: {
    width: number
    height: number
  }
  private _nouns: any[][]

  constructor(canvas: Canvas, width: number, height: number) {
    this._canvas = canvas
    this._boardSize = {
      width,
      height
    }
    this._nounSize = {
      width: this.canvas.width / width,
      height: this.canvas.height / height
    }
    this._nouns = []

    this.runNouns()
  }
  public get canvas(): Canvas {
    return this._canvas
  }
  public set canvas(value: Canvas) {
    this._canvas = value
  }
  public get boardSize(): {
    width: number
    height: number
  } {
    return this._boardSize
  }
  public set boardSize(value: { width: number; height: number }) {
    this._boardSize = value
  }
  public get nounSize(): {
    width: number
    height: number
  } {
    return this._nounSize
  }
  public set nounSize(value: { width: number; height: number }) {
    this._nounSize = value
  }
  public get nouns(): any[][] {
    return this._nouns
  }
  public set nouns(value: [][]) {
    this._nouns = value
  }
  //mapear os seres vivos
  private runNouns() {
    console.log('chamou')
    for (let y: number = 0; y < this._boardSize.height; y++) {
      const line: Array<TNoun> = []
      this._nouns.push(line)
      for (let x: number = 0; x < this.boardSize.width; x++) {
        let noun: TNoun = {
          alive: 0,
          x: x * this.nounSize.width,
          y: y * this.nounSize.height
        }
        line.push(noun)
      }
    }
  }
  public renderNoun(noun: TNoun) {
    this._canvas.createSquare(
      noun.x,
      noun.y,
      this.nounSize.width,
      this.nounSize.height,
      'black',
      'white'
    )
    if (noun.alive) {
      this._canvas.createSquare(
        noun.x,
        noun.y,
        this.nounSize.width,
        this.nounSize.height,
        'black',
        'black'
      )
    }
  }
  private render() {
    this.nouns.forEach((line: any) => {
      line.forEach((noun: TNoun) => {
        this.renderNoun(noun)
      })
    })
  }
  public runGame() {
    this.render()
  }
  public addNoun(noun: TNoun) {
    const nounDead: TNoun = {
      alive: 0,
      x: noun.x,
      y: noun.y
    }
    console.log(this._nouns[noun.y / 10 / 2][noun.x / 10 / 2])
    console.log(noun)
    if (this._nouns[noun.y / 10 / 2][noun.x / 10 / 2].alive === noun.alive) {
      console.log('entrou 1')
      this._nouns[noun.y / 10 / 2][noun.x / 10 / 2] = nounDead
      this.render()
      this.renderNoun(nounDead)
    } else {
      console.log('entrou 2')
      // console.log(noun)
      console.log(this._nouns[noun.y / 10 / 2][noun.x / 10 / 2])
      this._nouns[noun.y / 10 / 2][noun.x / 10 / 2] = noun
      console.log(this._nouns[noun.y / 10 / 2][noun.x / 10 / 2])
      this.render()
      this.renderNoun(noun)
      // console.log(this._nouns)
    }
  }
}
