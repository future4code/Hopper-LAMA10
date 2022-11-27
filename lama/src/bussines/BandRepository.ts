import { Band } from "../model/Band";

export interface BandRepository{
    insertBand(newBand:Band):Promise<void>
}