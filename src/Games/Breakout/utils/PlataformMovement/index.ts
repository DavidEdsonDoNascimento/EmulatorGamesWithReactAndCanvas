import { Plataform } from "./Plataform"

export const PlataformMovement = (
    context: any,
    height: number,
    plataformProps: any
) => {

    let plataform = new Plataform(
        plataformProps.x,
        height - 30,
        20,
        plataformProps.width,
        ['red', '#FFA62B']
    );



}