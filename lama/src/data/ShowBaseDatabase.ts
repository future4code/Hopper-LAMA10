import { ShowRepository } from "../bussines/ShowRepository";
import { Day, Show } from "../model/Show";
import { BaseDatabase } from "./BaseDatabase";


export class ShowBaseDatabase extends BaseDatabase implements ShowRepository{
  public static SHOW_TABLE = "Shows_Table"
  public static BAND_TABLE = "Bands_Table"

  public async insertShow(newShow:Show): Promise<void>{
    await ShowBaseDatabase.connection(ShowBaseDatabase.SHOW_TABLE).insert({
      id: newShow.getId(),
      week_day: newShow.getWeekDay(),
      start_time: newShow.getStartTime(),
      end_time: newShow.getEndTime(),
      band_id: newShow.getBandId()
    })
  }

  public async getShows(day: Day): Promise<any>{
    const result = await ShowBaseDatabase.connection(ShowBaseDatabase.SHOW_TABLE)
      .select("*")
      .where("week_day", "=", day)
    return result
  }

//   public async bandDetails(id: string): Promise<void> {
//     const result = await ShowBaseDatabase.connection(ShowBaseDatabase.BAND_TABLE)
//       .select()
//       .where("id", "=", id)
//     console.log(result)
//     return result[0]
// }
}