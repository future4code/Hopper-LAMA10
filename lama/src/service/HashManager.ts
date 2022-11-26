import * as bcript from "bcryptjs"
import { IHashManager } from "../bussines/Port"

export class HashManager implements IHashManager {
    async hash(plainText: string):Promise<string>{
        const count = Number(process.env.BCRYPT_COST)
        const salt = await bcript.genSalt(count)
        const cipherText = await bcript.hash(plainText,salt)
        return cipherText
    }
    async compare(plainText:string,cypherText: string){
        return bcript.compare(plainText,cypherText)
    }
}