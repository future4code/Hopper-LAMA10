
import { UserRepository } from "../bussines/UserRepository"
import { User } from "../model/User"
import { BaseDatabase } from "../data/BaseDatabase"

export class UserBaseDatabase extends BaseDatabase implements UserRepository {
    public static USER_TABLE = "Users_Table"

    public async insertUser(newUser: User): Promise<void> {
        await BaseDatabase.connection(UserBaseDatabase.USER_TABLE).insert({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            role: newUser.role
        })
    }
    public async findUserByEmail(email: string): Promise<User> {
        const result = await BaseDatabase.connection(UserBaseDatabase.USER_TABLE)
        .select("*")
        .where({email})
        return result[0]
    }
}