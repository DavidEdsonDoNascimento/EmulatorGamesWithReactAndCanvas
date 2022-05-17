export class Ball {
    static COLOR = 'red'
    static STROKE_STYLE = 'black'
    static STROKE_WIDTH = 4

    constructor(
        public x: number, 
        public y: number,  
        public rad: number
    ) {}

    public draw(context: any): void {
        context.beginPath()
        context.fillStyle = Ball.COLOR
        context.arc(this.x, this.y, this.rad, 0, 2 * Math.PI)
        context.strokeStyle = Ball.STROKE_STYLE
        context.strokeWidth = Ball.STROKE_WIDTH
        context.fill()
        context.stroke()
    }
}