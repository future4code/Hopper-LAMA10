export enum Day {
  SEGUNDA = "segunda",
  TERCA = "terça",
  QUARTA = "quarta",
  QUINTA = "quinta",
  SEXTA = "sexta",
  SABADO = "sábado",
  DOMINGO = "domingo"
}

export class Show {
  constructor(
    private id: string,
    private week_day: Day,
    private start_time: number,
    private end_time: number,
    private band_id: string
  ){}

  public getId(){
    return this.id
  }
  public getWeekDay() {
    return this.week_day
  }
  public getStartTime() {
    return this.start_time
  }
  public getEndTime() {
    return this.end_time
  }
  public getBandId() {
    return this.band_id
  } 
}

export interface ShowInputDTO {
  week_day:Day,
  start_time:number,
  end_time:number,
  band_id:string
}

export interface ShowsDetailInputDTO{
  name:string,
  music_genre: string
}