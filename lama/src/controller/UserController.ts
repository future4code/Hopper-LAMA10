import { UserBussines } from "../bussines/UserBussines";
import { Request, Response } from "express"
import { UserInputDTO, UserInputLoginDTO } from "../model/User";
export class UserController {
    constructor(
        private userBussines: UserBussines) { }

    public async signup(req: Request, res: Response) {
        try {
            const {name,email,password,role} = req.body

            const input:UserInputDTO = {
                name,
                email,
                password,
                role
            }
            const token = await this.userBussines.Create(input)
            res.status(200).send({message:"Usuario criado com sucesso!",token})
        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
     }
     public async login(req:Request,res:Response){
     try {
        const {email,password} = req.body

        const input:UserInputLoginDTO ={
            email,
            password
        } 
        
        const token = await this.userBussines.Login(input)
        res.status(200).send(token)
     } catch (error: any) {
        res.statusCode = 400
        let message = error.sqlMessage || error.message
        res.send({ message })
     }
     }
}