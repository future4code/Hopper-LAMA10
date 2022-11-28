import { BandRepository } from "../bussines/BandRepository";
import { BaseDatabase } from "./BaseDatabase";
import {Band}from "../model/Band"

export class BandBaseDatabase extends BaseDatabase implements BandRepository{
    public static BAND_TABLE = "Bands_Table"
   public async insertBand(newBand: Band): Promise<void> {
        await BandBaseDatabase.connection(BandBaseDatabase.BAND_TABLE).insert({
            id: newBand.getId(),
            name: newBand.getName(),
            music_genre: newBand.getMusicGenre(),
            responsible: newBand.getResponsible()
        })
    }

    public async bandDetails(id: string): Promise<void> {
        console.log(id)
        const result = await BandBaseDatabase.connection(BandBaseDatabase.BAND_TABLE)
          .where({id})
        console.log(result)
        return result[0]
    }
}