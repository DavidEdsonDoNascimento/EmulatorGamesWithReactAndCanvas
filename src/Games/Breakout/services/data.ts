import {
    PlataformStructure,
    PlayerStructure,
    StructureObjGeometric
} from "../types/StructureObjects"

export const data = {
    ballObj: {
        x: 20,
        y: 200,
        dx: 2,
        dy: 2,
        rad: 15,
        speed: 10
    } as StructureObjGeometric,
    brickObj: {
        x: 0.5,
        y: 50,
        width: 800 / 10 - 1,
        height: 20,
        density: 2,
        colors: ['blue', 'lightblue']
    } as StructureObjGeometric,
    player: {
        name: 'David',
        lives: 5,
        score: 0,
        level: 1
    } as PlayerStructure,
    plataformProps: {
        speed: 100,
        height: 20,
        width: 100,
        x: 100,
        color: 'orange',
    } as PlataformStructure
}
