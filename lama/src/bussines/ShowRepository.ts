import { Show } from "../model/Show";


export interface ShowRepository{
  insertShow(newShow:Show): Promise<void>
  getShows(day:string): Promise<any>
}