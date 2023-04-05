import { afro, jinno } from "../constructor";
import Afrosamurai from "./Afrosamurai";

const protagonist = { part: 'protagonist', ...afro }
const antagonist = { part: 'antagonist', ...jinno }

const afrosamurai = Afrosamurai.getInstance()
afrosamurai.setCharacters(afro, jinno)

export { afrosamurai }