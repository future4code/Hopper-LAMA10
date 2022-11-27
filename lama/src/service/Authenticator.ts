import * as jwt from "jsonwebtoken"
import { IAuthenticator } from "../bussines/Port"
import {AuthenticatorData} from "../model/AuthenticatorData"

export class Authenticator implements IAuthenticator {
    public generateToken = ({id,role}:AuthenticatorData):string =>{

        const token = jwt.sign(
            {id,role},
            
            process.env.JWT_KEY as string,
            {expiresIn: "1h"}
            
        )
        return token
    }
    public getTokenData = (token: string):AuthenticatorData =>{
        try {
            const payload = jwt.verify(token,process.env.JWT_KEY as string) as AuthenticatorData
            return {id: payload.id , role:payload.role}
        } catch (error:any) {
            throw new Error("")
        }
    }
}