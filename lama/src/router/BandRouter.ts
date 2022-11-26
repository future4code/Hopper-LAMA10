import express from "express"
import { BandBussines } from "../bussines/BandBussines"
import { BandController } from "../controller/BandController"
import { BandBaseDatabase } from "../data/BandBaseDatabase"
import { Authenticator } from "../service/Authenticator"
import { IdGenerate } from "../service/idGenerate"

const bandRouter = express.Router()
const idGenerate = new IdGenerate()
const authenticator = new Authenticator()
const bandBaseDatabase = new BandBaseDatabase()
const bandBussines = new BandBussines(bandBaseDatabase, idGenerate, authenticator)
const bandController = new BandController(bandBussines)

bandRouter.post("/band", (req, res) => bandController.signupBand(req, res))

export default bandRouter