import { Iperson } from "../../interfaces"

export default abstract class Person implements Iperson {
    private _gender:string
    private _name: string
    private _age:number
    private _height:number
    private _weight:number

    constructor(
        gender:string, 
        name: string,  
        age:number, 
        height:number, 
        weight: number
    ){
        this._gender = gender
        this._name = name
        this._age = age
        this._height = height
        this._weight = weight
    }

    get gender():string{
        return this._gender
    }

    get name():string{
        return this._name
    }

    get age():number{
        return this._age
    }

    get height():number {
        return this._height
    }

    get weight():number{
        return this._weight
    }

    walk():string{
        return 'Walking/Andando...'
    }
}