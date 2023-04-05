import { Isamurai } from "../../interfaces"

export default class Afrosamurai {
    public static instance: Afrosamurai
    private _characters:Isamurai[] = []
    
    public static getInstance():Afrosamurai{
        if(!Afrosamurai.instance) this.instance = new Afrosamurai()
        return this.instance
    }

    public setCharacters(...characters:Isamurai[]):void {
        this._characters.push(...characters)
    }
}