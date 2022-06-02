import { useEffect, useRef } from "react"
import { CharacterCam } from "../CharacterCam";
import { Sprite } from "../types/Sprite";

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
    
    sprite.positionCenter(map.frameWidth, map.frameHeight)
    
    const cam = new CharacterCam(map.frameWidth, map.frameHeight)

    const render = () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        map.img.src = '/map.jpg'

        cam.positionCenter(map.frameWidth, map.frameHeight)

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.save() 
        ctx.translate(-cam.x, -cam.y)
        
        ctx.drawImage(
            map.img, 
            (map.width-map.frameWidth)/2, 
            (map.height-map.frameHeight)/2, 
            map.frameWidth, 
            map.frameHeight, 
            0, 
            0, 
            map.frameWidth, 
            map.frameHeight
        )
        ctx.restore()

        sprite.move()
        // atualiza posição da camera em relação ao movimento do sprite
        cam.updatePosition(sprite)
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