import { useEffect, useRef } from "react"
import { Sprite } from "./types/Sprite";

const DIRECTION = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
}

const sprite = new Sprite();

export const GameMap = () => {

    const canvasRef = useRef<any>()

    const render = () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        sprite.move()
        sprite.draw(ctx)

        requestAnimationFrame(render)
    }

    useEffect(() => {
        render()
    }, [])

    const keyDownHandler = (e: React.KeyboardEvent) => {
        switch (e.code) {
            case 'KeyA':
                console.log('esquerda')
                sprite.setMoveLeft(true)
                break;
            case 'KeyD':
                console.log('Direita')
                sprite.setMoveRight(true)
                break;
            case 'KeyS':
                console.log('baixo')
                sprite.setMoveDown(true)
                break;
            case 'KeyW':
                console.log('cima')
                sprite.setMoveUp(true)
                break;
            default:
                console.error('tecla não cadastrada')
        }
    }

    const keyUpHandler = (e: React.KeyboardEvent) => {
        switch (e.code) {
            case 'KeyA':
                console.log('soltou esquerda')
                sprite.setMoveLeft(false)
                break;
            case 'KeyD':
                console.log('soltou Direita')
                sprite.setMoveRight(false)
                break;
            case 'KeyS':
                console.log('soltou baixo')
                sprite.setMoveDown(false)
                break;
            case 'KeyW':
                console.log('soltou cima')
                sprite.setMoveUp(false)
                break;
            default:
                console.error('soltou tecla não cadastrada')
        }
    }

    return <canvas
        tabIndex={0}
        className="canvas-container"
        ref={canvasRef}
        width={800}
        height={600}
        onKeyDown={keyDownHandler}
        onKeyUp={keyUpHandler}
    />
}