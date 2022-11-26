import { BandRepository } from "../bussines/BandRepository";
import { BaseDatabase } from "./BaseDatabase";
import {Band}from "../model/Band"

export class BandBaseDatabase extends BaseDatabase implements BandRepository{
    public static BAND_TABLE = ""
   public async insertBand(newBand: Band): Promise<void> {
        await BandBaseDatabase.connection(BandBaseDatabase.BAND_TABLE).insert({
            id: newBand.getId(),
            name: newBand.getName(),
            music_genre: newBand.getMusicGenre(),
            reponsible: newBand.getResponsible()
        })
    }

}