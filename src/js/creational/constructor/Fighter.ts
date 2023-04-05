import { Ifighter } from "../../interfaces";
import Person from "./Person";

export class Fighter extends Person implements Ifighter{
    private _reach:number
    private _defense:number

    constructor(
        gender:string,
        name: string, 
        age:number, 
        height:number, 
        weight: number, 
        reach:number, 
        defense:number
    ){
        super(gender, name, age, height, weight)
        this._reach = reach
        this._defense = defense
    }

    get reach():number{
        return this._reach
    }

    get defense():number{
        return this._defense
    }

    punch():string{
        return 'Punching/Socando...'
    }

    kick():string{
        return 'Kicking/Chutando...'
    }

    dodge():string{
        return 'Dodging/Esquivando...'
    } 
}