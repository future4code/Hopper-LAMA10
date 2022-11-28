import { Day, Show, ShowInputDTO } from "../model/Show";
import { BandRepository } from "./BandRepository";
import { IIdGenarete } from "./Port";
import { ShowRepository } from "./ShowRepository";


export class ShowBussines {
  constructor(
    private showBaseDatabase:ShowRepository,
    private bandBaseDatabase:BandRepository,
    private idGenerate: IIdGenarete,
  ){}

  public async CreateShow({week_day,start_time,end_time,band_id}:ShowInputDTO){
    try {
      if (!week_day || !start_time || !end_time || !band_id) {
        throw new Error("");
      }

      if (end_time <= start_time) {
        throw new Error("Horário de inicio do show deve ser maior que o horário de termino!!");
      }

      if (start_time > 22 || start_time < 8) {
        throw new Error("Não há disponibilidade para esse horário de show");
      }

      if (end_time > 23 || end_time < 9) {
        throw new Error("Não há disponibilidade para esse horário de show");
      }

      const result = await this.showBaseDatabase.getShows(week_day)

      let resultTime:Number[] = []

      for (let i = 0; i < result.length; i++) {
        resultTime.push(result[i].start_time)
        resultTime.push(result[i].end_time)
      }
      // console.log(resultTime)
      if (resultTime.indexOf(start_time) > -1) {
          throw new Error("Já existe um show marcado para esse horário!!");
      }else if(resultTime.indexOf(end_time) > -1){
          throw new Error("Já existe um show marcado para esse horário!!");
      }

      const id = this.idGenerate.generate();

      const newShow = new Show(
        id,
        week_day,
        start_time,
        end_time,
        band_id
      )

      await this.showBaseDatabase.insertShow(newShow)
    } catch (error:any) {
      throw new Error(error.message);
    }
  }

  public async GetShows({week_day}:any){
    try {
      if (!week_day) {
        throw new Error("É necessario passar o dia do show");
      }

      const result = await this.showBaseDatabase.getShows(week_day)

      for (let i = 0; i < result.length; i++) {
        const band = await this.bandBaseDatabase.bandDetails(result[i].id)
        console.log(band)

        // const bandDetail = {
        //   name: band.name

        // }
      }

    } catch (error:any) {
      throw new Error(error.message);
    }
  }
}