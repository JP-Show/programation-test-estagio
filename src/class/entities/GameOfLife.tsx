import { Canvas } from './Canvas'

export interface TNoun {
  alive: number
  x: number
  y: number
  next: number
  nears?: TNoun[]
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
    this.runNears()
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
          y: y * this.nounSize.height,
          next: 0
        }
        line.push(noun)
      }
    }
  }
  private runNears() {
    this.nouns.forEach((line: any, y: number) => {
      line.forEach((noun: TNoun, x: number) => {
        noun.nears = []
        for (let dy = -1; dy <= 1; dy++) {
          for (var dx = -1; dx <= 1; dx++) {
            if (dx !== 0 || dy !== 0) {
              const nx = x + dx
              const ny = y + dy
              if (
                nx >= 0 &&
                nx < this._boardSize.width &&
                ny >= 0 &&
                ny < this._boardSize.height
              ) {
                let Nnoun: TNoun = this.nouns[ny][nx]
                noun.nears.push(Nnoun)
              }
            }
          }
        }
      })
    })
  }
  private logical() {
    this.nouns.forEach((line: any) => {
      line.forEach((noun: TNoun) => {
        let n: number = 0
        noun.nears!.forEach((nNoun: TNoun) => {
          n += nNoun.alive
        })
        if (noun.alive) {
          noun.next = +(n >= 2 && n <= 3)
        } else {
          noun.next = +(n == 3)
        }
      })
    })
  }
  private update() {
    this.nouns.forEach((line: any) => {
      line.forEach((noun: TNoun) => {
        noun.alive = noun.next!
      })
    })
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
    this.logical()
    this.update()
    this.render()
  }
  public addNoun(noun: TNoun) {
    const nounDead: TNoun = {
      alive: 0,
      x: noun.x,
      y: noun.y,
      next: 0
    }
    // console.log(this._nouns[noun.y / 10 / 2][noun.x / 10 / 2])
    // console.log(noun)
    if (this._nouns[noun.y / 10 / 2][noun.x / 10 / 2].alive === noun.alive) {
      console.log('entrou 1')
      this._nouns[noun.y / 10 / 2][noun.x / 10 / 2] = nounDead
      this.render()
      this.renderNoun(nounDead)
    } else {
      // console.log('entrou 2')
      // console.log(noun)
      // console.log(this._nouns[noun.y / 10 / 2][noun.x / 10 / 2])
      this._nouns[noun.y / 10 / 2][noun.x / 10 / 2] = noun
      // console.log(this._nouns[noun.y / 10 / 2][noun.x / 10 / 2])
      this.runNears()
      this.render()
      this.renderNoun(noun)
      // console.log(this._nouns)
    }
  }
}
