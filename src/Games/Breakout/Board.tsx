import React, { useEffect, useRef } from "react";
import { BallMovement } from "./utils/BallMovement";
import { data } from './services/data';
import { WallCollision } from "./utils/WallCollision";
import { PlataformMovement } from "./utils/PlataformMovement";

export const Board = () => {
    const canvasRef = useRef<any>()

    let {
        ballObj: ball,
        plataformProps
    } = data

    const render = () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        BallMovement(ctx, ball)
        WallCollision(ball, canvas)
        PlataformMovement(ctx, canvas.width, canvas.height, plataformProps)

        requestAnimationFrame(render)
    }

    useEffect(() => {
        render()
    }, [])

    const movePlataformKeyPress = (event: React.KeyboardEvent) => {
        switch (event.code) {
            case 'KeyA':
                plataformProps.x -= plataformProps.speed;
                console.log('KeyA')
                break;
            case 'KeyD':
                plataformProps.x += plataformProps.speed;
                console.log('KeyD')
                break;
        }
    }

    return <canvas
        tabIndex={0}
        className="canvas-container"
        ref={canvasRef}
        onKeyPress={movePlataformKeyPress}
        width={window.innerWidth - 20}
        height={500}
    />
}