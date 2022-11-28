import express from "express"
import { UserBussines } from "../bussines/UserBussines"
import { UserController } from "../controller/UserController"
import { UserBaseDatabase } from "../data/UserBaseDatabase"
import { Authenticator } from "../service/Authenticator"
import { HashManager } from "../service/HashManager"
import { IdGenerate } from "../service/idGenerate"
import { SetRole } from "../service/SetRole"

 const userRouter = express.Router()
const authenticator = new Authenticator()
const hashManager = new HashManager()
const idGenerate = new IdGenerate()
const setRole = new SetRole()

const userBaseDatabase = new UserBaseDatabase()
const userBussines = new UserBussines(userBaseDatabase, idGenerate, hashManager, authenticator, setRole)
const userController = new UserController(userBussines)

userRouter.post("/signup", (req, res) => userController.signup(req, res))
userRouter.post("/login", (req, res) => userController.login(req, res))

export default userRouter