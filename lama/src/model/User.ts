export enum ROLE{
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"

}

// export class User {
//     constructor(
//         private id: string,
//         private name: string,
//         private email: string,
//         private password: string,
//         private role: ROLE
//     ){}

//     public getID(){
//         return this.id;
//     }
//     public getName(){
//         return this.name;
//     }
//     public getEmail(){
//         return this.email;
//     }
//     public getPassword():string {
//         return this.password;
//     }
//     public getRole(){
//         return this.role;
//     }
// }

export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: ROLE
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