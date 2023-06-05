import React, { useRef, useEffect } from 'react'
import './nounGrid.styles.css'

export function NounGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!
      ctx.fillStyle = 'red'
      ctx.fillRect(10, 10, 55, 50)

      ctx.fillStyle = 'blue'
      //(x, y, w, h)
      ctx.fillRect(30, 30, 55, 50)
    }
  }, [canvasRef])
  return (
    <div>
      <canvas
        ref={canvasRef}
        className="nounScreen"
        width={150}
        height={150}
      ></canvas>
    </div>
  )
}
