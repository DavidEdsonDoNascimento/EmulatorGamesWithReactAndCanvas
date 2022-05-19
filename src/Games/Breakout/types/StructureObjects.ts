export type StructureObjGeometric = {
    x: number;
    y: number;
    dx: number;
    dy: number;
    rad: number;
    speed?: number;
    width?: number;
    height?: number;
    density?: number;
    colors?: string[]
}

export type PlayerStructure = {
    name: string;
    lives: number;
    score: number;
    level: number;
}

export type PlataformStructure = {
    height: number;
    width: number;
    x: number;
    color: string;
    speed: number;
}