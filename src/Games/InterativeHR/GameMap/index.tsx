import { useEffect, useRef } from "react"
import { Sprite } from "../types/Sprite";

const DIRECTION = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
}


type GameMapProps = {
    sprite: Sprite
}

export const GameMap = ({ sprite }: GameMapProps) => {

    const canvasRef = useRef<any>()
    const map = {
        img: new Image(),
        frameWidth: 800,
        frameHeight: 600,
        width: 3840,
        height: 25031
    }

    const render = () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        map.img.src = '/map.jpg'

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        ctx.drawImage(
            map.img, 
            map.width/2, 
            map.height-map.frameHeight, 
            map.frameWidth, 
            map.frameHeight, 
            0, 
            0, 
            map.frameWidth, 
            map.frameHeight
        )

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
        width={map.frameWidth}
        height={map.frameHeight}
        onKeyDown={keyDownHandler}
        onKeyUp={keyUpHandler}
    />
}