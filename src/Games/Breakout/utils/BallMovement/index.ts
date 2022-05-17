
import { StructureObjGeometric } from "../../types/StructureObjects"
import { Ball } from "./Ball"

export const BallMovement = (
    context: any, 
    ball: StructureObjGeometric
) => {
    
    let data = new Ball(
        ball.x, 
        ball.y, 
        ball.rad || 0
    )
    data.draw(context)
    ball.x += ball.dx || 0
    ball.y += ball.dy || 0
}