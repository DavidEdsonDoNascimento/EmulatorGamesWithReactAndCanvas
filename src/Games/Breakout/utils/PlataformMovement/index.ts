import { Plataform } from "./Plataform"

export const PlataformMovement = (
    ctx: any,
    width: number,
    height: number,
    plataformProps: any
) => {

    let plataform = new Plataform(
        ctx,
        plataformProps.x,
        height - 30,
        20,
        plataformProps.width,
        ['red', '#FFA62B']
    );

    plataform.move()

    if (plataformProps.x <= 0) {
        plataformProps.x = 0
    } else if (plataformProps.x + plataformProps.width >= width) {
        plataformProps.x = width - plataformProps.width
    }


}