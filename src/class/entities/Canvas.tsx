interface TCanvas {
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

class Canvas {
  private canvas: HTMLCanvasElement | null
  private ctx: CanvasRenderingContext2D
  private width: number
  private height: number
  constructor(
    canvas: HTMLCanvasElement | null,
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) {
    this.canvas = canvas
    this.ctx = ctx
    this.width = width
    this.height = height
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
      this.ctx.fillStyle = clFill
      this.ctx.strokeStyle = clBorder
      this.ctx.fillRect(x, y, w, h)
      this.ctx.strokeRect(x, y, w, h)
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
      this.ctx.fillStyle = cl
      this.ctx.fillRect(x - w, y - w, weight, weight)
    } catch (err) {
      throw 'point error ' + err
    }
  }
  public createLine(x1: number, y1: number, x2: number, y2: number): void {
    try {
      this.ctx.strokeStyle = 'black'
      this.ctx.beginPath()
      this.ctx.moveTo(x1, y1)
      this.ctx.lineTo(x2, y2)
      this.ctx.closePath()
      this.ctx.stroke()
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
      this.ctx.fillStyle = cl
      this.ctx.strokeStyle = cl
      const width = x2 - x1
      const height = y2 - y1
      if (fill) {
        this.ctx.fillRect(x1, y1, width, height)
      } else {
        this.ctx.strokeRect(x1, y1, width, height)
      }
    } catch (err) {
      throw 'circ error ' + err
    }
  }
  public clear(cl: string): void {
    if (cl) {
      this.createSquare(0, 0, this.width, this.height, cl, cl)
    } else {
      this.ctx.clearRect(0, 0, this.width, this.height)
    }
  }
}
