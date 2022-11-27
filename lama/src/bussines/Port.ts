import { AuthenticatorData } from "../model/AuthenticatorData"
import { ROLE } from "../model/User"

export interface IAuthenticator {
generateToken({id,role}:AuthenticatorData):string
getTokenData(token:string):AuthenticatorData
}

export interface IHashManager {
hash(plainText:string):Promise<string>
compare(plainText:string,cypherText:string):Promise <boolean>
}

export interface IIdGenarete {
   generate(): string
}

export interface ISetRole {
   setRole(role:any):ROLE
}