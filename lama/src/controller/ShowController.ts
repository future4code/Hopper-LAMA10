import { Response, Request } from "express"
import { ShowBussines } from "../bussines/ShowBussines"
import { Day, ShowInputDTO, ShowsDetailInputDTO } from "../model/Show"

export class ShowController {
  constructor(
    private showBussines: ShowBussines
  ){}

  public async createShow(req:Request, res:Response){
    try {
      const {week_day,start_time,end_time,band_id} = req.body

      const input:ShowInputDTO ={
        week_day,
        start_time: parseInt(start_time),
        end_time: parseInt(end_time),
        band_id
      }
      await this.showBussines.CreateShow(input)
      res.status(200).send({ message:"Show cadastrado com sucesso!!" })
    } catch (error:any) {
      res.statusCode = 400
      let message = error.sqlMessage || error.message
      res.send({ message })
    }
  }
  
  public async getShows(req:Request, res:Response){
    try {
      const week_day:Day = req.body

      const result:any = await this.showBussines.GetShows(week_day)
      const ListShow = {
        name: result.name,
        music_genre: result.music_genre
      }

      res.status(200).send(ListShow)
    } catch (error:any) {
      res.statusCode = 400
      let message = error.sqlMessage || error.message
      res.send({ message })
    }
  }

}