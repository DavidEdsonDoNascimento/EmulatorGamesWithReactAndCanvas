import { useEffect, useRef } from "react";
import { BallMovement } from "./utils/BallMovement";
import { data } from './services/data';
import { WallCollision } from "./utils/WallCollision";

export const Board = () => {
    const canvasRef = useRef<any>()

    const render = () => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        let { ballObj: ball } = data
       
        BallMovement(ctx, ball)
        WallCollision(ball, canvas)

        requestAnimationFrame(render)
    }

    useEffect(() => {
        render()
    }, [])
    
    return <canvas className="canvas-container" ref={canvasRef} width={800} height={500}/>
}