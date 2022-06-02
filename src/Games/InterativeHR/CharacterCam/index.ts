import { Sprite } from "../types/Sprite";

export class CharacterCam {
  
  public x: number;
  public y: number;
  
  constructor(private width: number, private height: number) {
    this.x = 0;
    this.y = 0;
  }

  public leftEdge() {
    return this.x + (this.width * 0.25)
  }
  
  public rightEdge() {
    return this.x + (this.width * 0.75)
  }
  
  public topEdge() {
    return this.y + (this.height * 0.25)
  }
  
  public bottomEdge() {
    return this.y + (this.height * 0.75)
  }

  public positionCenter(mapWidth: number, mapHeight: number): void {
    this.x = (mapWidth - this.width) / 2
    this.y = (mapHeight - this.height) / 2
  }

  public updatePosition(sprite: Sprite): void {
    
    if (sprite.posX < this.leftEdge()) {
      this.x = sprite.posX - (this.width * 0.25)
    }

    if (sprite.posX + sprite.width < this.rightEdge()) {
      this.x = sprite.posX + sprite.width - (this.width * 0.75)
    }

    if (sprite.posY + sprite.height < this.topEdge()) {
      this.y = sprite.posY + sprite.height - (this.height * 0.25)
    }

    if (sprite.posX + sprite.width < this.bottomEdge()) {
      this.y = sprite.posY + sprite.height - (this.height * 0.75)
    }
  }
}