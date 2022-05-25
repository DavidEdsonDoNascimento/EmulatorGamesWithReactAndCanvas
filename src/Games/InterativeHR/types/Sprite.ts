export class Sprite {

    private moveLeft = false;
    private moveRight = false;
    private moveUp = false;
    private moveDown = false;
    // Origem para captura da imagem a ser exibida
    private srcX = 0;
    private srcY = 0;
    // Posição no canvas onde a figura será exibida
    private posX = 0;
    private posY = 0;
    private width = 54; // tamaho da largura da imagem tiles-compretos.png dividido pelo numero de quadros da linha
    private height = 96; // tamanho da altura da imagem tiles-compretos.png dividido pelo numero de quadros da coluna
    private countAnimation = 0;
    private speed = 1;
    private img: any;

    constructor() {
        const imageData = new Image()
        imageData.src = 'tiles-compretos.png'
        console.log(imageData)
        this.img = imageData
    }

    public setMoveRight(currentBool: boolean): void {
        this.moveRight = currentBool;
    }

    public setMoveLeft(currentBool: boolean): void {
        this.moveLeft = currentBool;
    }

    public setMoveUp(currentBool: boolean): void {
        this.moveUp = currentBool;
    }

    public setMoveDown(currentBool: boolean): void {
        this.moveDown = currentBool;
    }

    public move(): void {
        if (this.moveRight) {
            this.posX += this.speed;
            this.srcY = this.height * 3;
        } else if (this.moveLeft) {
            this.posX -= this.speed;
            this.srcY = this.height * 2;
        } else if (this.moveUp) {
            this.posY -= this.speed;
            this.srcY = this.height * 1;
        } else if (this.moveDown) {
            this.posY += this.speed;
            this.srcY = this.height * 0;
        }
    }
    /**
     * Desenha o sprite na tela
     * @param ctx Contexto
     * @returns void
     */
    public draw(ctx: any): void {
        ctx.drawImage(
            this.img,
            this.srcX,
            this.srcY,
            this.width,
            this.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        )

        //Caso qualquer seta seja pressionada, o contador de animação é incrementado
        if (this.moveLeft || this.moveDown || this.moveRight || this.moveUp) {
            this.countAnimation++;

            if (this.countAnimation >= 40) {
                this.countAnimation = 0;
            }

            this.srcX = Math.floor(this.countAnimation / 5) * this.width;
            return;
        }

        //Caso nenhuma tecla seja pressionada, o contador de animação é zerado e a imagem do personagem parado é exibida
        this.srcX = 0;
        this.countAnimation = 0;
    }

}