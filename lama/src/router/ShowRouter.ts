import express from "express"
import { ShowBussines } from "../bussines/ShowBussines"
import { ShowController } from "../controller/ShowController"
import { BandBaseDatabase } from "../data/BandBaseDatabase"
import { ShowBaseDatabase } from "../data/ShowBaseDatabase"
import { IdGenerate } from "../service/idGenerate"


const showRouter = express.Router()
const idGenerate = new IdGenerate()
const showBaseDatabase = new ShowBaseDatabase()
const bandBaseDatabase = new BandBaseDatabase()
const showBussines = new ShowBussines(showBaseDatabase,bandBaseDatabase, idGenerate)
const showController = new ShowController(showBussines)

showRouter.post("/create", (req,res) => showController.createShow(req, res))
showRouter.get("/details", (req,res) => showController.getShows(req,res))

export default showRouter