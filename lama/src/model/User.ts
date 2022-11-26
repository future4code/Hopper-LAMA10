

export enum ROLE{
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"

}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: ROLE
    ){}

    getID(){
        return this.id
    }
    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getPassword(){
        return this.password
    }
    getRole(){
        return this.role
    }
}

export interface UserInputDTO {
    name: string,
    email: string,
    password: string,
    role?: string
}
export interface UserInputLoginDTO {
    email: string,
    password: string
}