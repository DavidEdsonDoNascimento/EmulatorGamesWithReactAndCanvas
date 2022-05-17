import { StructureObjGeometric } from "../../types/StructureObjects"

export const WallCollision = (
    ball: StructureObjGeometric, 
    canvas: any
) => {

    const horizontalEdgesTouched = (
        y: number, 
        radius: number, 
        height: number
    ): boolean => {
        return y - radius < 0 || y + radius > height
    }

    const verticalEdgesTouched = (
        x: number, 
        radius: number, 
        width: number
    ): boolean => {
        return x - radius < 0 || x + radius > width 
    }

    const { 
        x, 
        y, 
        rad: radius 
    } = ball
    
    if (horizontalEdgesTouched(y, radius, canvas.height)) {
        ball.dy *= -1
    }

    if (verticalEdgesTouched(x, radius, canvas.width)) {
        ball.dx *= -1 
    }
}