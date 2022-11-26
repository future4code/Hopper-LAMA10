import { User, UserInputDTO, UserInputLoginDTO } from "../model/User";
import { IAuthenticator, IHashManager, IIdGenarete, ISetRole } from "./Port";
import { UserRepository } from "./UserRepository";

export class UserBussines {
    constructor(
        private userBaseDatabase:UserRepository,
        private idGenerate: IIdGenarete,
        private hashManager: IHashManager,
        private authenticator: IAuthenticator,
        private setRole: ISetRole
    ){}

    public async Create({name,email,password,role}:UserInputDTO){
        try {
            if(!name || !email || !password){
            throw new Error()
            }
            if(!email.includes("@")){
                throw new Error("");
                
            }
            if(password.length < 5){
                throw new Error("")
            }
            
            const id = this.idGenerate.generate()
            const hashPassword = await this.hashManager.hash(password) 
            const userRole = this.setRole.setRole(role)
            const newUser = new User(id,name,email,hashPassword,userRole)
            await this.userBaseDatabase.insertUser(newUser)
        
            const token = this.authenticator.generateToken({id,role:userRole})

            return token

        } catch (error:any) {
            throw new Error(error.message)
        }
       

    }
    public async Login({email,password}:UserInputLoginDTO){
        try {
            if(!email || !password){
                throw new Error("")
            }
            const user = await this.userBaseDatabase.findUserByEmail(email)
            if(!user){
                throw new Error("")
            }
            const isValidPassword = await this.hashManager.compare(password,user.getPassword())
            if(!isValidPassword){
                throw new Error("")
            }
            const id = user.getID()
            const role = user.getRole()
            const token = this.authenticator.generateToken({id,role})
            return token
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}