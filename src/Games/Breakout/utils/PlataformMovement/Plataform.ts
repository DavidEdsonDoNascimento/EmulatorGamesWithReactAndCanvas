export class Plataform {
    constructor(
        public ctx: any,
        public x: number,
        public y: number,
        public height: number,
        public width: number,
        public colors: string[]
    ) { }

    public move(): void {
        this.ctx.beginPath()
        this.ctx.rect(this.x, this.y, this.width, this.height)
        this.ctx.fillStyle = this.colors[1]
        this.ctx.strokeStyle = this.colors[1]
        this.ctx.lineWidth = 1
        this.ctx.fillStyle = this.colors[1]
        this.ctx.shadowBlur = 0
        this.ctx.shadowColor = 'blue'
        this.ctx.strokeRect(this.x, this.y, this.width, this.height)
        this.ctx.fill()
    }
}