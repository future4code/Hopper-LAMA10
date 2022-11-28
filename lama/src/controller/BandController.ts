import { BandBussines } from "../bussines/BandBussines";
import {Request,Response} from "express"
import { BandDetailsInputDTO, BandInputDTO } from "../model/Band";

export class BandController {
    constructor(private bandBussines : BandBussines){}

    public async signupBand(req:Request,res:Response){
        try {
            const {name,music_genre,responsible} = req.body
            const token = req.headers.authorization as string
    
            const band:BandInputDTO = {
                name,
                musicGenre:music_genre,
                responsible,
                token
            }
            await this.bandBussines.Create(band)
            res.status(200).send("Banda criada com sucesso!")
        } catch (error:any) { 
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }

    public async bandDetails(req:Request,res:Response){
        try {
            const { idBand } = req.body   

            const bandDetails:BandDetailsInputDTO = {
                idBand
            }

            const result = await this.bandBussines.BandDetails(bandDetails)
            res.status(200).send({ DETALHES: result })

        } catch (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }
}