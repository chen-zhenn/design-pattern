import { Isamurai } from "../../interfaces";
import { Fighter } from "./Fighter";

// Samurai Constructor
export class Samurai extends Fighter implements Isamurai {
    private _kenjutsu:number
    private _shurikenjutsu:number
    private _weapons:string[] = ['sword','shuriken']

    constructor( 
        gender:string,
        name: string, 
        age:number, 
        height:number, 
        weight: number,
        reach:number, 
        defense:number,
        kenjutsu:number,
        shurikenjutsu:number
    ){
        super(gender, name, age, height, weight, reach, defense)
        this._kenjutsu = kenjutsu
        this._shurikenjutsu = shurikenjutsu
    }

    get kenjutsu():number {
        return this._kenjutsu
    }

    get shurikenjutsu():number {
        return this._shurikenjutsu
    }

    attack(weapon?:string):string{
        const found = this._weapons.find(value => value === weapon?.toLowerCase())
        if(!found) return this.punch()
        return `${weapon} attack!`
    }
}