import React, { useRef, useEffect, useState, useDeferredValue } from 'react'
import './nounGrid.styles.css'
import { Noun } from '../../class/entities/Noun'

export function NounGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [pX, setPX] = useState<number>()
  const [pY, setPY] = useState<number>()
  const [arr, setArr] = useState<Noun[]>([])
  const [removed, setRemoved] = useState<Noun>()
  const [on, setOn] = useState<boolean>(false)

  function handleMouse(e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
    const a = canvasRef.current!
    const x = Math.floor((e.pageX - a.offsetLeft) / 50)
    const y = Math.floor((e.pageY - a.offsetTop) / 50)
    const removeds: Noun[] | [] = arr.filter(
      value => value.pX == x && value.pY == y
    )
    console.log('removidos')
    console.log(removed)
    if (removeds.length > 0) {
      setArr(prev =>
        prev!.filter(item => {
          return item.pX != removeds[0].pX || item.pY != removeds[0].pY
        })
      )
      setRemoved(removeds[0])
      return
    }
    setRemoved(undefined)

    setArr(prev => [...prev, new Noun(x, y)])
    setPX(x)
    setPY(y)
  }
  function startMulti() {
    
    while(on)
    if (canvasRef.current) {
      setTimeout(() => {
        arr.map(value => {
          
        })

      }, 1000)
    }
  }

  useEffect(() => {
    if (canvasRef.current) {
      console.log('adicionados')
      console.log(arr)
      const canvas = canvasRef.current
      const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!

      //(x, y, w, h)
      if (removed != undefined) {
        ctx.clearRect(removed?.pX!, removed?.pY!, 1, 1)
      } else {
        ctx.fillStyle = 'red'
        ctx.fillRect(pX!, pY!, 1, 1)
      }
    }
  }, [pX, pY, removed])
  return (
    <>
      <canvas
        onClick={e => handleMouse(e)}
        ref={canvasRef}
        className="nounScreen"
        width={3}
        height={3}
      ></canvas>
      <button onClick={e => }></button>
    </>
  )
}
