export interface TCanvas {
  canvas: HTMLCanvasElement | null
  ctx: CanvasRenderingContext2D
  width: number
  height: number

  createSquare?(
    x: number,
    y: number,
    w: number,
    h: number,
    clBorder: string,
    clFill: string
  ): void

  createPoint?(x: number, y: number, cl: string, weight: number): void
  createLine?(x1: number, y1: number, x2: number, y2: number): void
  createReact(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    cl: string,
    fill: string
  ): void
  clear(cl: string): void
}

export class Canvas {
  private _canvas: HTMLCanvasElement | null
  private _ctx: CanvasRenderingContext2D
  private _width: number
  private _height: number

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) {
    this._canvas = canvas
    this._ctx = ctx
    this._width = width
    this._height = height
  }
  public get canvas(): HTMLCanvasElement | null {
    return this._canvas
  }
  public set canvas(value: HTMLCanvasElement | null) {
    this._canvas = value
  }
  public get ctx(): CanvasRenderingContext2D {
    return this._ctx
  }
  public set ctx(value: CanvasRenderingContext2D) {
    this._ctx = value
  }
  public get width(): number {
    return this._width
  }
  public set width(value: number) {
    this._width = value
  }
  public get height(): number {
    return this._height
  }
  public set height(value: number) {
    this._height = value
  }
  public createSquare(
    x: number,
    y: number,
    w: number,
    h: number,
    clBorder: string,
    clFill: string
  ): void {
    try {
      this._ctx.fillStyle = clFill
      this._ctx.strokeStyle = clBorder
      if (clFill) this._ctx.fillRect(x, y, w, h)
      if (clBorder) this._ctx.strokeRect(x, y, w, h)
    } catch (err) {
      throw 'Error context ' + err
    }
  }
  public createPoint(
    x: number,
    y: number,
    cl: string = 'gray',
    weight: number = 1
  ): void {
    try {
      cl = cl
      weight = weight
      let w: number = weight / 2
      this._ctx.fillStyle = cl
      this._ctx.fillRect(x - w, y - w, weight, weight)
    } catch (err) {
      throw 'point error ' + err
    }
  }
  public createLine(x1: number, y1: number, x2: number, y2: number): void {
    try {
      this._ctx.strokeStyle = 'black'
      this._ctx.beginPath()
      this._ctx.moveTo(x1, y1)
      this._ctx.lineTo(x2, y2)
      this._ctx.closePath()
      this._ctx.stroke()
    } catch (err) {
      throw 'line error ' + err
    }
  }
  public createReact(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    cl: string = 'black',
    fill: string
  ): void {
    try {
      this._ctx.fillStyle = cl
      this._ctx.strokeStyle = cl
      const width = x2 - x1
      const height = y2 - y1
      if (fill) {
        this._ctx.fillRect(x1, y1, width, height)
      } else {
        this._ctx.strokeRect(x1, y1, width, height)
      }
    } catch (err) {
      throw 'circ error ' + err
    }
  }
  public clear(cl: string): void {
    if (cl) {
      this.createSquare(0, 0, this._width, this._height, cl, cl)
    } else {
      this._ctx.clearRect(0, 0, this._width, this._height)
    }
  }
}
