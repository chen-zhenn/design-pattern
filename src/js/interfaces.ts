export interface Iperson {
    gender: string;
    name: string;
    age: number;
    height: number;
    weight: number;
    walk():string
}

export interface Ifighter extends Iperson {
    reach: number;
    defense: number;
    punch():string;
    kick():string;
    dodge():string;
}

export interface Isamurai extends Ifighter {
    kenjutsu:number; 
    shurikenjutsu:number;
    attack():string
}