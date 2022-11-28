import { BandBaseDatabase } from "../data/BandBaseDatabase";
import { Band, BandDetailsInputDTO, BandInputDTO } from "../model/Band";
import { BandRepository } from "./BandRepository";
import { IAuthenticator, IIdGenarete } from "./Port";

export class BandBussines{
    constructor(
       private bandBaseDatabase:BandRepository,
       private idGenerate:IIdGenarete,
       private authenticatorData:IAuthenticator){}

        public async Create({name,musicGenre,responsible,token}:BandInputDTO){
            try {
                if(!name || !musicGenre || !responsible){
                    throw new Error("")
                }
                const {role} = this.authenticatorData.getTokenData(token)
                if (role !== "ADMIN"){
                  throw new Error("")
                }
                const id = this.idGenerate.generate()
                const newBand = new Band(id,name,musicGenre,responsible)
                await this.bandBaseDatabase.insertBand(newBand)
            } catch (error:any) {
                throw new Error(error.message)
            }
        }

        public async BandDetails({idBand}:BandDetailsInputDTO){
            try {
                
                if(!idBand){
                    throw new Error("")
                }

                const result = await this.bandBaseDatabase.bandDetails(idBand)
                return result

            } catch (error:any) {
                throw new Error(error.message)
            }
        }
}