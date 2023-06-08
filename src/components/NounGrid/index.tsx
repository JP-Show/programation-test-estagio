import React, { useEffect, useRef, useState } from 'react'
import './nounGrid.styles.css'
import { GameOfLife, TNoun } from '../../class/entities/GameOfLife'
import { Canvas } from '../../class/entities/Canvas'

export function NounGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gameOfLifeRef = useRef<GameOfLife | null>(null)
  let intervalGame: number | null = null

  function handleMouse(e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
    if (gameOfLifeRef.current) {
      const a = canvasRef.current!
      const x = Math.floor((e.pageX - a.offsetLeft) / 20) * 20
      const y = Math.floor((e.pageY - a.offsetTop) / 20) * 20
      const noun: TNoun = {
        alive: 1,
        x,
        y,
        next: 0
      }
      gameOfLifeRef.current.addNoun(noun)
    }
  }

  function executeGameOfLife() {
    if (gameOfLifeRef.current) {
      gameOfLifeRef.current.runGame()
    }
  }
  function runGame() {
    intervalGame = setInterval(() => {
      if (gameOfLifeRef.current) {
        gameOfLifeRef.current.runGame()
      }
    }, 100)
  }
  function stopGame() {
    if (intervalGame) {
      clearInterval(intervalGame)
      intervalGame = null
    }
  }
  useEffect(() => {
    if (canvasRef.current == null) {
      throw 'Error'
    }
    const ctx = canvasRef.current.getContext('2d')
    const canvas = new Canvas(
      canvasRef.current,
      ctx!,
      ctx!.canvas.clientWidth,
      ctx!.canvas.clientHeight
    )
    const gameOfLife = new GameOfLife(canvas, 10, 10)
    gameOfLifeRef.current = gameOfLife
    executeGameOfLife()
  })
  return (
    <>
      <canvas
        onClick={handleMouse}
        width={200}
        height={200}
        ref={canvasRef}
        id="canvasRef"
        className="nounScreen"
      ></canvas>
      <button onClick={runGame}> RUN</button>
      <button onClick={stopGame}> STOP</button>
    </>
  )
}
