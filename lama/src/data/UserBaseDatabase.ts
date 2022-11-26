
import { UserRepository } from "../bussines/UserRepository"
import { User } from "../model/User"
import { BaseDatabase } from "../data/BaseDatabase"

export class UserBaseDatabase extends BaseDatabase implements UserRepository {
    public static USER_TABLE = ""

    public async insertUser(newUser: User): Promise<void> {
        await BaseDatabase.connection(UserBaseDatabase.USER_TABLE).insert({
            id: newUser.getID(),
            name: newUser.getName(),
            email: newUser.getEmail(),
            password: newUser.getPassword(),
            role: newUser.getRole()
        })
    }
    public async findUserByEmail(email: string): Promise<User> {
        const result = await BaseDatabase.connection(UserBaseDatabase.USER_TABLE).select("*").where("email", "=", `${email}`)
        return result[0]
    }
}