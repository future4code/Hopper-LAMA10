import { BandBussines } from "../bussines/BandBussines";
import {Request,Response} from "express"
import { BandInputDTO } from "../model/Band";

export class BandController {
    constructor(private bandBussines : BandBussines){}

    public async signupBand(req:Request,res:Response){

        try {
            const {name,music_genre,responsible} = req.body
            const token = req.params.authorization as string
    
            const band:BandInputDTO = {
                name,
                musicGenre:music_genre,
                responsible,
                token
            }
            await this.bandBussines.Create(band)
            res.status(200).send("Banda criada com sucesso!")
        } catch (error) {
            
        }
      

    }
}